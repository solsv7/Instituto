import React from "react";
import './VideosComp1.css'

const VideosComp1 = () => {
    return(
        <div className="container">
            <h1>Videos</h1>
            <h3>Here we will upload our diferrent classes</h3>
            <p>You can also find us on youtube</p>
            <p>Link a youtube</p>

            <div className="year">
                <h2>Classes</h2>

                <p id="VidClas">Vid 1 con su titulo</p>
                <p id="VidClas">Vid 2 con su titutlo</p>
                

            </div>
        </div>
    );
};

export default VideosComp1;