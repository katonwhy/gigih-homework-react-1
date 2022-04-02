import React, { Component } from "react";
import SongTrack from '../../components/track/index.js'
import Search from "../../components/search/index.js"
import config from '../../library/config.js'
import './Home.css'

class Home extends Component {
    state = {
        accessToken: '',
        isAuthorize: false,
        tracks: [],
    }

    getHashParams() {
        const hashParams = {};
        const r = /([^&;=]+)=?([^&;]*)/g;
        const q = window.location.hash.substring(1);
        let e = r.exec(q);
    
        while (e) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
          e = r.exec(q);
        }
        return hashParams;
    }
    
    componentDidMount() {
        const params = this.getHashParams();
        const { access_token: accessToken } = params;

        this.setState({ accessToken, isAuthorize: accessToken !== undefined })
        
    }

    getSpotifyLinkAuthorize() {
        const state = Date.now().toString()
        const clientId = process.env.REACT_APP_SPOTIFY_API_KEY
        const redirect_uri = 'http://localhost:3000'
    
        return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirect_uri}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
    }

    onSuccessSearch(tracks) {
        this.setState({ tracks });
        console.log(this.state.tracks)
    }
        
    render() {
        return(
        <>
            <div className="login">
                <a href={`${this.getSpotifyLinkAuthorize()}`}>Login</a>
            </div>
            <Search 
                accessToken = {this.state.accessToken}
                onSuccess = {(tracks) => this.onSuccessSearch(tracks)}
            />
            {this.state.tracks.map((e) => (
                <div className="contents">
                <SongTrack 
                    src={e.album.images[2].url}
                    title={e.name}
                    artist={e.artists[0].name}
                    album={e.album.name}
                    />
                </div>
            ))}
        </>
        )
    }
}

export default Home