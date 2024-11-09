import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { UserContext } from '../../UserContext/UserContext'; // Importar el contexto

const LoginComponent = () => {
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setUserName } = useContext(UserContext); // Usar el contexto

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { dni, password });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log('datos que obtiene: ', user)

            setUserName(user.nombre); // Actualizar el nombre del usuario en el contexto

            // Redirigir según el rol del usuario
            if (user.rol === 2) {
                navigate('/ProfilePage');
            } else if (user.rol === 3) {
                navigate('/ProfilePage');
            } else {
                navigate('/ProfilePage');
            }
        } catch (err) {
            setError('Error al iniciar sesión');
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin} id="formularioLogin">
                <input
                    type="text"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="DNI"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                {error && <div className="msgError">{error}</div>}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginComponent;