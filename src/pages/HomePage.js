import React from "react";
import Homepag from "../components/HomePageComponents/homepage/homepage"
import Niveles from "../components/HomePageComponents/levels/levels";
import TextAbout from "../components/AboutPageComponents/TextAbout/TextAbout";
import Schedules from "../components/SchedulesPageComponents/Schedules";
import DifClases from "../components/HomePageComponents/difClases/difClases"
import transition from "../transition";

const HomePage = () =>{
    return(
        <div>
            <Niveles />
            <Homepag />
            <TextAbout/>
            <Schedules />
        </div>
    )
}

export default transition(HomePage);