import React from "react";
import logInsta from '../../images/iconos/instagram.png'
import logFace from '../../images/iconos/facebook.png'
import './Redes.css'

const Redes =  () => {
    return(
        <div className="container-redes">
            <ul>
                <li><img src={logInsta} id="instalogo" alt=""/></li>
                <li><img src={logFace} id="facelogo" alt=""/></li>
            </ul>
        </div>
    )
}

export default Redes;