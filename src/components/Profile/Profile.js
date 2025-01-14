import React from "react";
import './Profile.css';
import Inscribe from "../inscribePage/Inscribe";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {}; // Si es null, asigna un objeto vacío
    function saveChanges(){
        alert('Los cambios han sido guardados con éxito')
    }
    let UserType = "Usuario"
    if (user.rol === 1){
        UserType = "Administrador"
    }
    else if(user.rol === 2){
        UserType = "Profesor"
    }
    else if (user.rol === 3){
        UserType = "Alumno"
    }
    
    return(
        <div className="contenidoProfile">
            <h2>Mi Perfil</h2>
            <div className="userData">
                <img src="" alt=""/>
                <h3>{user.nombre}</h3>
                <h4 className="Rol">{UserType}</h4>
                <div>
                    <h1>Informacion adicional</h1>
                    <div>
                        <h4>Correo : example@gmail.com</h4>
                        <h4>Num. Contacto: 1234 567890</h4>
                    </div>
                </div>
                <div className="noce"><button onClick={saveChanges}>Guardar Cambios</button><button id="modifyBTN">Modificar Informacion</button></div>
            </div>
            <Inscribe/>
        </div>
    )
}

export default Profile;