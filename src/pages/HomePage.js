import React from "react";
import Homepag from "../components/homepage/homepage";
import Niveles from "../components/levels/levels";
import Footer from "../components/footer/footer";
import Home from "../components/Home/homeComponent";
import transition from "../transition";

const HomePage = () =>{
    return(
        <div>
            <Homepag />
            <Niveles />
            <Footer />
        </div>
    )
}

export default transition(HomePage);