import React, { useState } from "react";
import config from "../../library/config";
import PlaylistForm from "./PlaylistForm";
import './playlist.css'
import axios from "axios"
import logo from '../../assets/Spotify_Logo_Custom.png'


const Playlist = ({accessToken, uris}) => {
    const [form, setForm] = useState({
        name : "",
        description : ""
    })

    const [errorForm, setErrorForm] = useState(false);
    const [errorFormMessage, setErrorFormMessage] = useState('');

    const handleForm = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
        if (form.name.length < 10) {
            setErrorForm(true);
            setErrorFormMessage('Playlist name should at least 10 characters long')
        }else{
            setErrorForm(false)
            setErrorFormMessage('')
        }
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
        const addTrackToPlaylist = await axios.post(
            `${config.SPOTIFY_BASE_URL}/playlists/${createPlaylist.data.id}/tracks`,
            selectedTrackData,
            request
        )

        if (addTrackToPlaylist.data) {
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
                validateForm={errorForm}
                validateFormMessage={errorFormMessage}
            />
            <img src={logo} alt="app-logo" />
            <p className="AppInfo">Search and select your favorite song, create your spotify music playlist based on your selected song track, you can select multiple song track by clearing the music lists and then searching different song track</p>
        </div>
    )
}
export default Playlist