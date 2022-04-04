import React, { Component, useEffect, useState } from "react";
import SongTrack from '../../components/track/index.js'
import Search from "../../components/search/index.js"
import config from '../../library/config.js'
import './Home.css'

const Home = () => {

    const [accessToken, setAccessToken] = useState('')
    //const [isAuthorize, setIsAuthorize] = useState(false)
    const [tracks, setTracks] = useState([])
    const [selectedTracksUri, setSelectedTracksUri] = useState([])
    const [isInSearch, setIsInSearch] = useState(false);

    // const getHashParams = () => {
    //     const hashParams = {};
    //     const r = /([^&;=]+)=?([^&;]*)/g;
    //     const q = window.location.hash.substring(1);
    //     let e = r.exec(q);
    
    //     while (e) {
    //       hashParams[e[1]] = decodeURIComponent(e[2]);
    //       e = r.exec(q);
    //     }
    //     return hashParams;
    // }
    
    // const componentDidMount = () => {
    //     const params = getHashParams();
    //     const { access_token: accessToken } = params;

    //     this.setState({ accessToken, isAuthorize: accessToken !== undefined })
        
    // }

    useEffect(() => {
        //const params = getHashParams()
        const accessToken = new URLSearchParams(window.location.hash).get('#access_token')
        //const { access_token: setAccessToken } = params
        setAccessToken(accessToken);
        console.log(accessToken)
    }, [])

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
        //console.log(searchTracks)
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
        <Search 
            accessToken = {accessToken}
            onSuccess = {(tracks) => onSuccessSearch(tracks)}
            onClearSearch = {clearSearch}
        />
        {tracks.map((e) => (
            <div className="contents">
            <SongTrack 
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