import React, { useEffect, useState } from "react";
import SongTrack from '../../components/track/index'
import Search from "../../components/search/index"
import './Home.css'
import Playlist from "../../components/playlist/index";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

    //const [isAuthorize, setIsAuthorize] = useState(false)
    const [tracks, setTracks] = useState([])
    const [selectedTracksUri, setSelectedTracksUri] = useState([])
    const [isInSearch, setIsInSearch] = useState(true);

    
    
    useEffect(() => {
        if (!isInSearch) {
            const selectedTracks = filterSelectedTracks()
            setTracks(selectedTracks)
        }
    }, [selectedTracksUri])

    

    const filterSelectedTracks = () => {
        return tracks.filter(track => selectedTracksUri.includes(track.uri))
    }

    const onSuccessSearch = (searchTracks) => {
        setIsInSearch(true)
        const selectedTracks = filterSelectedTracks()
        const searchDistinctTracks = searchTracks.filter(track => !selectedTracksUri.includes(track.uri))

        setTracks([...selectedTracks, ...searchDistinctTracks])
    }

    const clearSearch = () => {
        const selectedTracks = filterSelectedTracks();
    
        setTracks(selectedTracks);
        setIsInSearch(false);
      }

    const toggleSelect = (track) => {
        const uri = track.uri
        if (selectedTracksUri.includes(uri)) {
            setSelectedTracksUri(selectedTracksUri.filter(item => item !== uri))
        } else {
            setSelectedTracksUri([...selectedTracksUri, uri])
        }
    }
        
    return(
        <div className="GridContainer">
            <div className="Main">

                <Search 
                accessToken = {useSelector((state) => state.accessToken)}
                onSuccess = {(tracks) => onSuccessSearch(tracks)}
                onClearSearch = {clearSearch}
                />
                <div className="Tracks">
                    {tracks.map((e) => (
                        <SongTrack 
                            key={e.id}
                            src={e.album.images[1].url}
                            title={e.name}
                            artist={e.artists[0].name}
                            album={e.album.name}
                            duration={e.duration_ms}
                            toggleSelect={() => toggleSelect(e)}
                            />
                    ))}
                </div>

            </div>
            <div className="Right">
                <Playlist
                accessToken={useSelector((state) => state.accessToken)}
                uris={selectedTracksUri}
                />
            </div>
        </div>        
        
    )
    
}

export default Home