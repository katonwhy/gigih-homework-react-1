import React, { useState } from "react";
import './track.css';

const SongTrack = ({src , title, artist, album, toggleSelect}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleToggleSelect = () => {
        setIsSelected(!isSelected)
        toggleSelect()
    }

    return (            
            <div className="Track">
                <div className="Img">
                    <img
                        src={src}
                        alt={title}
                        />
                </div>
                <div className="Info">
                    <div className="title">
                        <h2>{title}</h2>            
                    </div>
                    <div className="artist">
                        <p>{artist}</p>
                    </div>
                    <div className="album">
                        <p>{album}</p>            
                    </div>
                    <div className="play">
                        <span className="btn message" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</span>
                    </div>
                </div>
            </div>
    )
}

export default SongTrack