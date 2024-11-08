import React from "react";
import './TextBlog.css'

const TextBlog = () => {
    return(
        <div className="container">
            <h1>Blog</h1>
            <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <div className="year">
                <h2>Our Photos</h2>

                <p id="imgNenes">Fotos de niños y viajes</p>
                <p id="imgNenes">Fotos de niños y viajes</p>
                <p id="imgNenes">Fotos de niños y viajes</p>

            </div>
        </div>
    );
};

export default TextBlog;