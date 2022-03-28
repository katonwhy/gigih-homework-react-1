import React from "react";
import './track.css';
import { FaPlay } from "react-icons/fa";

const SongTrack = ({src , title, artist, album}) => {
    return (
        <div className="content">
            <div className="info img">
                <img
                    src={src}
                    alt={title}
                />
            </div>
            <div className="info title">
                <p>{title}</p>            
            </div>
            <div className="info artist">
                <p>{artist}</p>
            </div>
            <div className="info album">
                <p>{album}</p>            
            </div>
            <div className="info play">
                <span class="btn message"><FaPlay/></span>
            </div>
        </div>
    )
}

export default SongTrack