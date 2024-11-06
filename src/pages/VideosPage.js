import React from "react";
import transition from "../transition";
import VideosComp1 from "../components/VideosComp/VideosComp1";

const VideosPage = () => {
    return(
        <div>
            <VideosComp1></VideosComp1>
        </div>
    )
}

export default transition(VideosPage);