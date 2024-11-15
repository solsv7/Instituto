import React from "react";
import transition from "../transition";
import ProfilePageComponent from "../components/ProfilePageComponents/ProfilePageComponent";

const ProfilePage = () =>{
    return(
        <div>
            <ProfilePageComponent/>
        </div>
    )
}

export default transition(ProfilePage);