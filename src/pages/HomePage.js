import React from "react";
import Homepag from "../components/HomePageComponents/homepage/homepage"
import Niveles from "../components/HomePageComponents/levels/levels";
import DifClases from "../components/HomePageComponents/difClases/difClases"
import transition from "../transition";

const HomePage = () =>{
    return(
        <div>
            <Homepag />
            <Niveles />
        </div>
    )
}

export default transition(HomePage);