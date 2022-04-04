import React, { useState } from "react";
import './track.css';
import { FaPlay } from "react-icons/fa";

const SongTrack = ({src , title, artist, album, toggleSelect}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleToggleSelect = () => {
        setIsSelected(!isSelected)
        toggleSelect()
    }

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
                <span class="btn message" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</span>
            </div>
        </div>
    )
}

export default SongTrack