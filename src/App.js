import React from "react";
import './App.css';
import data from './data/data.js'
import SongTrack from './components/track/index.js'

const App = () => {
  const track = data.map((e) => (
    <div className="contents">
      <SongTrack 
        src={e.album.images[2].url}
        title={e.name}
        artist={e.artists[0].name}
        album={e.album.name}
        />
    </div>
  ))

  return (
    track
  )
}

export default App;