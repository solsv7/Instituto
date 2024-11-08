import React from "react";
import transition from "../transition";
import Home from "../components/HomePageComponents/Home/homeComponent";

const ProfilePage = () =>{
    return(
        <div>
            <Home />
        </div>
    )
}

export default transition(ProfilePage);