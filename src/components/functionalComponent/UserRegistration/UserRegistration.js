import React, { useState } from 'react';
import transition from '../../../transition';
import './UserRegistration.css';


const CrearUsuario = () => {
    const [dni, setDni] = useState('');
    const [nombre, setNombre] = useState('');
    const [rol, setRol] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos
        if (!dni || !nombre || !rol || !password) {
            setError('Todos los campos son requeridos.');
            return;
        }

        // Construir los datos a enviar al backend
        const datosUsuario = {
            dni: parseInt(dni),
            nombre,
            rol: parseInt(rol),
            password,
        };

        // Si el rol es 'Alumno', enviar 'id_clase' como null
        if (rol === '3') {
            datosUsuario.id_clase = null;
        }

        try {
            const response = await fetch('http://localhost:3001/api/crear-persona-usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosUsuario),
            });

            const result = await response.json();

            if (response.ok) {
                setMensaje('Usuario creado correctamente.');
                setError('');
            } else {
                setError(result.error || 'Hubo un error al crear el usuario.');
                setMensaje('');
            }
        } catch (error) {
            setError('Error al conectar con el servidor.');
            setMensaje('');
        }
    };

    return (
        <div className="user-registration">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className='MarcoFormulario'>
                    <div>
                        <label>DNI:</label>
                        <input
                            type="text"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Rol:</label>
                        <select
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                            required
                        >
                            <option value="">Seleccionar rol</option>
                            <option value="2">Profesor</option>
                            <option value="3">Alumno</option>
                        </select>
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className='BotonCrearUser'>Crear Usuario</button>
            </form>

            {mensaje && <p className="success">{mensaje}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default transition(CrearUsuario);
