import React, { useState } from "react";
import './track.css';

type SongTrackProps = {
    src: string
    title: string
    artist: string
    album: string
    toggleSelect: () => void
}
// {src , title, artist, album, toggleSelect}

const SongTrack = (props: SongTrackProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleToggleSelect: ()=> void = () => {
        setIsSelected(!isSelected)
        props.toggleSelect()
    }

    return (            
            <div className="Track">
                <div className="Img">
                    <img
                        src={props.src}
                        alt={props.title}
                        />
                </div>
                <div className="Info">
                    <div className="title">
                        <h2>{props.title}</h2>            
                    </div>
                    <div className="artist">
                        <p>{props.artist}</p>
                    </div>
                    <div className="album">
                        <p>{props.album}</p>            
                    </div>
                    <div className="play">
                        <span className="btn message" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</span>
                    </div>
                </div>
            </div>
    )
}

export default SongTrack