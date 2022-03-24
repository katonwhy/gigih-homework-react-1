import React from "react";
import '../../App.css';

const SongTrack = ({src , title, artist}) => {
    return (
        <div className="content">
            <img
                src={src}
                alt={title}
            />
            <p>Song Title : <br/> {title}</p>
            <p>Song Artist : {artist}</p>
            <span class="btn message">Select</span>
        </div>
    )
}

export default SongTrack