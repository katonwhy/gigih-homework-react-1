import React, { useState } from "react";
import config from "../../library/config";
import './search.css'
import SearchBar from "./SearchBar";

const Search = ({accessToken, onSuccess, onClearSearch}) => {

    const [text, setText] = useState('')
    const [isClear, setIsClear] = useState(true)

    const handleInput= (e) => {
        setText(e.target.value);
        console.log(text)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        var request = {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type' : 'application/json',
            }
        }

        const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, request).then((data) => data.json())

        const tracks = response.tracks.items
        onSuccess(tracks)
        setIsClear(false)
        console.log(response)
        
    }

    const handleClear = () => {
        setText('');
        setIsClear(true);
        onClearSearch();
    }

    return(
        <div className="SearchSong">
            <h1>Song Search</h1>
            <SearchBar 
                text={text}
                onSubmit={onSubmit}
                handleInput={handleInput}
            />
            {!isClear &&(
                <button onClick={handleClear}>Clear Search</button>
            )}
        </div>
    )  
        
}

export default Search