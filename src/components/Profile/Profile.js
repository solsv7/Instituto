import React from "react";
import './Profile.css';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    function saveChanges(){
        alert('Los cambios han sido guardados con éxito')
    }
    return(
        <div className="contenidoProfile">
            <h2>Mi Perfil</h2>
            <div className="userData">
                <div className="info">
                    <div className="noc"><h3>Usuario </h3> <h3>{user.nombre}</h3></div>
                    <div className="noc"><h3>Clase </h3><h3>Clase Ejemplo</h3></div>
                    <div className="noc"><h3>Correo </h3><h3>Example@gmail.com</h3></div>
                </div>
                <div className="noce"><button onClick={saveChanges}>Guardar Cambios</button><button id="modifyBTN">Modificar Informacion</button></div>
            </div>
        </div>
    )
}

export default Profile;