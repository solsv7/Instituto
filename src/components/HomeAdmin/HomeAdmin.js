import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import transition from "../../transition";

const HomeAdmin = () => {
    const location = useLocation();
    const [userName, setUserName] = useState(location.state?.userName || '');

    useEffect(() => {
        // Si no hay `userName` en `location.state`, carga el nombre desde `localStorage`
        if (!userName) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.nombre) {
                setUserName(user.nombre);
            }
        }
    }, [userName]);

    return (
        <div>
            <h1>Bienvenido, Administrador {userName}!</h1>
            
        </div>
    );
};

export default transition(HomeAdmin);
