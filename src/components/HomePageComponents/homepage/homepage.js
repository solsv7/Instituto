import React from "react";
import './homepage.css';
import profesor from './Persona.png';

const Homepag = () => {
    return(
        <div className="todo">
        <div className="contenedor">
            <h2 className="Texto">
                "A different way to learn Languages"
            </h2>
            <img src={profesor} alt="" className="profe"></img>
        </div>
        </div>
    )
}

export default Homepag;