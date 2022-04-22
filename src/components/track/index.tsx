import React, { useState } from "react";
import './track.css';

type SongTrackProps = {
    src: string
    title: string
    artist: string
    album: string
    duration: number
    toggleSelect: () => void
}
// {src , title, artist, album, toggleSelect}

const pad: (num: number) => string = (num) => {
    return `${num}`.padStart(2, '0');
};

//function to set milliseconds to readable format HH:MM:SS
const miliToDurationFormat: (milliseconds: number) => string = (milliseconds) => {
  
  const asSeconds: number = milliseconds / 1000;

  let hours: number = 0;
  let minutes: number = Math.floor(asSeconds / 60);
  const seconds: number = Math.floor(asSeconds % 60);

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }

  return hours
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
};

const SongTrack = (props: SongTrackProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleToggleSelect: ()=> void = () => {
        setIsSelected(!isSelected)
        props.toggleSelect()
    }

    return (         
        <div>
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
                    <div className="Duration">
                        <p>{miliToDurationFormat(props.duration)}</p>            
                    </div>
                    <div className="play">
                        <span className="btn message" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</span>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default SongTrack