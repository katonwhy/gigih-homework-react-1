import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import config from '../../library/config'
import saveAccessToken from "../../redux/accessToken/accessTokenActions.js";
import setAuthorize from "../../redux/accessToken/authorizeActions.js";
import Button from '@material-ui/core/Button';
import './login.css'
import logo from '../../assets/Spotify_Logo_Custom.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Login = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        const accessTokenUrl = new URLSearchParams(window.location.hash).get('#access_token')
        dispatch(saveAccessToken(accessTokenUrl))
        if (accessTokenUrl !== null) {
            try {
                dispatch(setAuthorize(true))
            } catch (error) {
                alert(error)
            }
        }
        //setIsAuthorize(true)
    }, [])

    const getSpotifyLinkAuthorize = () => {
        const state = Date.now().toString()
        const clientId = process.env.REACT_APP_SPOTIFY_API_KEY
    
        return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${config.HOST}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
    }

    return (
        <div className="login">
            <img src={logo} alt="app-logo" />
            <p>Login with your spotify account to continue..</p>
            <Button 
                variant="outlined" 
                color="secondary" 
                size="large" 
                href={`${getSpotifyLinkAuthorize()}`}
                startIcon={<ExitToAppIcon />}
            >Login
            </Button>
        </div>
    )
}

export default Login