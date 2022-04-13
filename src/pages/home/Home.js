import React, { useEffect, useState } from "react";
import SongTrack from '../../components/track/index.js'
import Search from "../../components/search/index.js"
import config from '../../library/config.js'
import './Home.css'
import Playlist from "../../components/playlist/index.js";
import { useSelector, useDispatch } from "react-redux";
import saveAccessToken from "../../redux/accessToken/accessTokenActions.js";

const Home = () => {

    //const [isAuthorize, setIsAuthorize] = useState(false)
    const [tracks, setTracks] = useState([])
    const [selectedTracksUri, setSelectedTracksUri] = useState([])
    const [isInSearch, setIsInSearch] = useState(true);

    const dispatch = useDispatch()

    useEffect(() => {
        const accessTokenUrl = new URLSearchParams(window.location.hash).get('#access_token')
        dispatch(saveAccessToken(accessTokenUrl))
        //setIsAuthorize(true)
    }, [])
    console.log(useSelector((state) => state.accessToken))
    
    useEffect(() => {
        if (!isInSearch) {
            const selectedTracks = filterSelectedTracks()
            setTracks(selectedTracks)
        }
    }, [selectedTracksUri])

    const getSpotifyLinkAuthorize = () => {
        const state = Date.now().toString()
        const clientId = process.env.REACT_APP_SPOTIFY_API_KEY
        const redirect_uri = 'http://localhost:3000'
    
        return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirect_uri}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
    }

    const filterSelectedTracks = () => {
        return tracks.filter(track => selectedTracksUri.includes(track.uri))
    }

    const onSuccessSearch = (searchTracks) => {
        setIsInSearch(true)
        const selectedTracks = filterSelectedTracks()
        const searchDistinctTracks = searchTracks.filter(track => !selectedTracksUri.includes(track.uri))

        setTracks([...selectedTracks, ...searchDistinctTracks])
    }

    const clearSearch = () => {
        const selectedTracks = filterSelectedTracks();
    
        setTracks(selectedTracks);
        setIsInSearch(false);
      }

    const toggleSelect = (track) => {
        const uri = track.uri
        if (selectedTracksUri.includes(uri)) {
            setSelectedTracksUri(selectedTracksUri.filter(item => item !== uri))
        } else {
            setSelectedTracksUri([...selectedTracksUri, uri])
        }
    }
        
    return(
        <>
            <div className="login">
                <a href={`${getSpotifyLinkAuthorize()}`}>Login</a>
            </div>
        
            <Playlist
            accessToken={useSelector((state) => state.accessToken)}
            uris={selectedTracksUri}
            />
            <Search 
            accessToken = {useSelector((state) => state.accessToken)}
            onSuccess = {(tracks) => onSuccessSearch(tracks)}
            onClearSearch = {clearSearch}
            />
            {tracks.map((e) => (
                <div className="contents">
                <SongTrack 
                    key={e.id}
                    src={e.album.images[2].url}
                    title={e.name}
                    artist={e.artists[0].name}
                    album={e.album.name}
                    toggleSelect={() => toggleSelect(e)}
                    />
                </div>
            ))}
        </>        
        
    )
    
}

export default Home