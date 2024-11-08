import React from "react";
import './difClases.css';
import mix from '../../../images/iconos/barajar.png';
import group from '../../../images/iconos/usuarios-alt.png';
import phone from '../../../images/iconos/telefono-inteligente.png';
import house from '../../../images/iconos/hogar.png';

const DifClases = () => {
    return (
        <div className="CtnAllCls">
            <div className="ContenedorClases">
                <h3>We have different ways to teach</h3>
                <div className="Formas">
                    <div className="tarjetaClase"><p>Face to Face</p><img src={group} alt="" id="groupIcon" /></div>
                    <div className="tarjetaClase"><p>Virtual</p><img src={phone} alt="" id="phoneIcon" /></div>
                    <div className="tarjetaClase"><p>Mixed</p><img src={mix} alt="" id="mixIcon" /></div>
                </div>
                <div className="Text2">
                    <img src={house} alt="" id="houseIcon"/>
                    <h2>We also have classes on student´s houses. The modality could be in group or just the student</h2>
                </div>
            </div>
        </div>
    )
}

export default DifClases;