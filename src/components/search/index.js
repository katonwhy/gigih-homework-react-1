import React, { Component } from "react";
import config from "../../library/config";
import './search.css'

class Search extends Component {

    state = {
        text : '',
    }

    handleInput= (e) => {
        this.setState({text : e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const { text } = this.state

        var request = {
            headers: {
                'Authorization': 'Bearer ' + this.props.accessToken,
                'Content-Type' : 'application/json',
            }
        }

        const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, request).then((data) => data.json())

        const tracks = response.tracks.items
        this.props.onSuccess(tracks)
        console.log(response)
        
    }

    render() {
    
        return(
            <div className="SearchSong">
                {console.log(this.state.text)}
                <h1>Song Search</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" id="song" name="song" onChange={this.handleInput}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    } 
        
}

export default Search