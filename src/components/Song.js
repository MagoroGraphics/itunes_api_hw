import React from "react";

const Song = ({song, position}) => {


    return(
        <ul class="eachsong">
            <li>
                <h3>Position # {position + 1}</h3>
            </li>
            <li>
                <h4>Title </h4><h2>{song["im:name"]["label"]}</h2>
            </li>
            <li id="author">
                By {song["im:artist"]["label"]}
            </li>
            <li> 
                <img src={song["im:image"][2]["label"]}></img>
            </li>
            <li> 
                <audio controls>
                    <source src={song["link"][1]["attributes"]["href"]}></source>
                </audio>
            </li>
        </ul>
    )
}

export default Song