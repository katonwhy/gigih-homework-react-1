import React, { useState } from "react";
import config from "../../library/config";
import './search.css'
import SearchBar from "./SearchBar";
import Button from '@material-ui/core/Button';

type SearchProps = {
    accessToken: string
    onSuccess: any
    onClearSearch: () => void
}
//{accessToken, onSuccess, onClearSearch}

const Search = (props: SearchProps) => {

    const [text, setText] = useState<string>('')
    const [isClear, setIsClear] = useState<boolean>(true)

    const handleInput= (e: any) => {
        setText(e.target.value);
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()

        var request = {
            headers: {
                'Authorization': 'Bearer ' + props.accessToken,
                'Content-Type' : 'application/json',
            }
        }

        const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, request).then((data) => data.json())

        const tracks = response.tracks.items
        props.onSuccess(tracks)
        setIsClear(false)
        
    }

    const handleClear = () => {
        setText('');
        setIsClear(true);
        props.onClearSearch();
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
                <div className="btnClear">
                    <Button 
                        variant="contained"
                        color="secondary" 
                        onClick={handleClear}
                        >Clear Search
                    </Button>
                </div>
            )}
        </div>
    )  
        
}

export default Search