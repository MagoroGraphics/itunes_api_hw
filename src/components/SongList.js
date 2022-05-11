import React from "react";
import Song from "../components/Song";

const SongList = ({songs}) => {

const songItems = songs.map((song, index) => {
    return <Song song={song} position={index}/>

    
})

return(
    <div>
        <ul>
            {songItems}
        </ul>
    </div>
)

}

export default SongList