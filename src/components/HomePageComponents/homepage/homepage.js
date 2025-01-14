import React from "react";
import './homepage.css';
import ImageLoader from "../../functionalComponent/imageLoader/imageLoader";

const Homepag = () => {
    return(
        <div className="todo">
            <div className="TextoHome">
                <h2>A different way</h2>
                <h3>to learn Languages</h3>
            </div>
            <ImageLoader />
        </div>
    )
}

export default Homepag;