import React, { useEffect, useState } from "react";
import './Modificar.css';
import axios from "axios";
import Imagen1 from '../../images/imgsPerfil/first-pic.png';
import Imagen2 from '../../images/imgsPerfil/second-pic.png';
import Imagen3 from '../../images/imgsPerfil/third-pic.png';
import Imagen4 from '../../images/imgsPerfil/fourth-pic.png';
import Imagen5 from '../../images/imgsPerfil/fifth-pic.png';
import Imagen6 from '../../images/imgsPerfil/sixth-pic.png';
import Imagen7 from '../../images/imgsPerfil/seventh-pic.png';
import Imagen8 from '../../images/imgsPerfil/eighth-pic.png';

const ModificarProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0); // Almacena el índice de la foto seleccionada
    const [showOptions, setShowOptions] = useState(false); // Mostrar opciones de fotos
    const [mail, setMail] = useState(""); // Correo
    const [contactNumber, setContactNumber] = useState(""); // Número de contacto
    const [parentContact, setParentContact] = useState(""); // Número de contacto del adulto
    const user = JSON.parse(localStorage.getItem("user")) || {}; // Si es null, asigna un objeto vacío

    const photoMap = [
        Imagen1, Imagen2, Imagen3,
        Imagen4, Imagen5, Imagen6,
        Imagen7, Imagen8,
    ];

    useEffect(() => {
        const fetchProfileInfo = async () => {
            const params = { id_alumno: user.id_alumno, id_profesor: user.id_profesor };
            try {
                const response = await axios.get("http://localhost:3001/api/perf-info", { params });
                const profile = response.data[0];
                setProfileData(profile);
                setPhotoIndex(profile?.id_foto || 0); // Asignar índice de la foto
                setMail(profile?.mail || ""); // Asignar correo
                setContactNumber(profile?.whatsapp || ""); // Asignar número de contacto
                setParentContact(profile?.whatsapp_adulto || ""); // Asignar contacto adulto
            } catch (error) {
                console.error("Error al obtener la información:", error);
            }
        };

        fetchProfileInfo();
    }, [user.id_alumno, user.id_profesor]);

    const handleImageClick = () => {
        setShowOptions(!showOptions); // Alterna el estado de mostrar opciones
    };

    const handlePhotoSelect = (index) => {
        setPhotoIndex(index); // Actualiza el índice de la foto seleccionada
        setShowOptions(false); // Cierra las opciones
    };

    const handleSave = async () => {
        const updatedData = {
            id_alumno: user.id_alumno || null, // Puede ser nulo
            id_profesor: user.id_profesor || null, // Puede ser nulo
            id_foto: photoIndex,
            mail,
            whatsapp: contactNumber,
            whatsapp_adulto: parentContact,
            id_perfil: profileData?.id_perfil || null, // Incluye id_perfil si existe
        };

        try {
            console.log('la informacion que viaja es esta: ', updatedData);
            const response = await axios.put("http://localhost:3001/api/actualizar-perfil", updatedData);
            alert("Información actualizada exitosamente");
        } catch (error) {
            console.error("Error al actualizar la información:", error);
            alert("Ocurrió un error al actualizar la información");
        }
    };

    return (
        <div>
            <div className="Contenido-Modificar">
                <h1>Modificar Perfil</h1>
                <div className="Info-Usuario">
                    <div className="pics-container">
                        <div className="pic" onClick={handleImageClick}>
                            <img src={photoMap[photoIndex]} alt="Foto de perfil" />
                            {showOptions && (
                                <div className="photo-options">
                                    {photoMap.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Opción ${index + 1}`}
                                            className="photo-option"
                                            onClick={() => handlePhotoSelect(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="info-extra">
                        <h2>Perfil de {profileData?.nombre}</h2>
                        <h4>Correo:
                            <input
                                type="text"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                placeholder="No se ha proporcionado"
                                required
                            />
                        </h4>
                        <h4>Num. Contacto:
                            <input
                                type="text"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                placeholder="No se ha proporcionado"
                                required
                            />
                        </h4>
                        <h4>Num. Contacto Adulto:
                            <input
                                type="text"
                                value={parentContact}
                                onChange={(e) => setParentContact(e.target.value)}
                                placeholder="No se ha proporcionado"
                            />
                        </h4>
                    </div>
                    <div className="noce">
                        <button className="saveBTN" onClick={handleSave}>
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModificarProfile;
