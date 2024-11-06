import React from "react";
import transition from "../transition";
import TextAbout from "../components/TextAbout/TextAbout";
import'./defaultStyle.css';

const AboutPage = () => {
    return(
        <div>
            <TextAbout />
        </div>
    )
}

export default transition(AboutPage); 