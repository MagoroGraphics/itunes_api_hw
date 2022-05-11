import React, {useState, useEffect} from "react";
import SongList from "../components/SongList";


const ChartBox = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
      }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs["feed"]["entry"]))
        
      }

    return(
        <main>
            <h1>Top 20 UK songs</h1>
            <SongList songs={songs}></SongList>
            
        </main>
    )
}

export default ChartBox