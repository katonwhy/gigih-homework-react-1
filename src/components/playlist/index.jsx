import React, { useState } from "react";
import config from "../../library/config";
import PlaylistForm from "./PlaylistForm";
import './playlist.css'
import axios from "axios"

const Playlist = ({accessToken, uris}) => {
    const [form, setForm] = useState({
        name : "",
        description : ""
    })

    const handleForm = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        var request = {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type' : 'application/json',
            }
        }

        //get userID
        const response = await fetch(`${config.SPOTIFY_BASE_URL}/me`, request).then((data) => data.json())

        const responseUserId = response.id
        
        console.log(responseUserId)


        //create playlist to userID
        const playlistData = JSON.stringify({
            name: form.name,
            description: form.description,
            public: false,
            collaborative: false,
        })
        const createPlaylist = await axios.post(
            `${config.SPOTIFY_BASE_URL}/users/${responseUserId}/playlists`,
            playlistData,
            request
        )


        //add selected song track to playlist
        const selectedTrackData = JSON.stringify({
            uris
        })
        console.log(uris)
        const addTrackToPlaylist = await axios.post(
            `${config.SPOTIFY_BASE_URL}/playlists/${createPlaylist.data.id}/tracks`,
            selectedTrackData,
            request
        )

        console.log(selectedTrackData)
        if (addTrackToPlaylist.data) {
            console.log(addTrackToPlaylist.data.snapshot_id)
            alert('playlist created successfully!')
            setForm({ name: "", description: "" })
        }
    }

    return(
        <div className="Playlist">
            <PlaylistForm 
                form={form}
                onSubmit={onSubmit}
                handleForm={handleForm}
            />
        </div>
    )
}
export default Playlist