import React from "react";
import './TextAbout.css'

const TextAbout = () => {
    return(
        <div className="ContenedorAbout">
            <h1>About Us</h1>
            <div className="Contenido">
                <h3>Somos un instituto de ingles y portugues llamado St Thomas .... </h3>
                <h3>Mas informacion del instituto</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>

            <div className="year">
                <h2>+30 years making future</h2>

                <p id="img30">Img de instituto +30 años</p>
            </div>
        </div>
    );
};

export default TextAbout;