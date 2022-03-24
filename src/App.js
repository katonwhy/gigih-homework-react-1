import React from "react";
import './App.css';
import data from './data/data.js'
import SongTrack from './components/track/index.js'

function App() {
  return (
    <div className="contents">
      <SongTrack 
      src={data.album.images[1].url}
      title={data.album.name}
      artist={data.album.artists[0].name}
      />
    </div>
  )
}

export default App;