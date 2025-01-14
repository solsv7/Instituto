import React from "react";
import img1 from "../../images/Gente1.jpg";
import img2 from "../../images/Gente2.jpg";
import img3 from "../../images/Gente3.jpg";
import "./Gallery.css"

const Gallery = () => {
    return ( 
        <div className="ContentGallery">
            <div className="TextGallery">
                <h2>Our most recent events</h2>
                <h3>With our students we travel to Brazil or United Kingdom</h3>
                <h3>The last year we made a camping activity in (Place)</h3>
                <h3>Extra info here</h3>
            </div>
            <div className="slider" >
                <div className="slide-track">
                    <div className="slide"><img src={img1} alt=""/></div>
                    <div className="slide"><img src={img2} alt=""/></div>
                    <div className="slide"><img src={img3} alt=""/></div>
                    <div className="slide"><img src={img1} alt=""/></div>
                    <div className="slide"><img src={img2} alt=""/></div>
                    <div className="slide"><img src={img3} alt=""/></div>
                    <div className="slide"><img src={img1} alt=""/></div>
                    <div className="slide"><img src={img2} alt=""/></div>
                    <div className="slide"><img src={img3} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

