import './App.css';
import data from './data/data.js'
function App() {
  return (
    <div className="contents">
      <header className="content">
        <img
          src={data.album.images[1].url}
          alt="song image cover"
        />
        <p>Song Title : <br/> {data.album.name}</p>
        <p>Song Artist : {data.album.artists[0].name}</p>
        <span class="btn message">Select</span>
      </header>
    </div>
    
  );
}

export default App;
