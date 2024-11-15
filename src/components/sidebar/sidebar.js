// src/components/Sidebar.js
import React, { useState, useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext'; // Importar el contexto
import './Sidebar.css';
import menuImagen from '../../images/iconos/menu-hamburguesa.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Estado para controlar si la sidebar está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado de la sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { userName, setUserName } = useContext(UserContext); // Usar el contexto

 
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserName(''); // Limpiar el nombre del usuario en el contexto
        navigate('/');
    };

  return (
    <div>
      {}
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen } <img src={menuImagen} alt='' id='menuImagen'></img>
      </button>

      {}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Opciones</h2>
        <div className='Divparasepararyquedebonito'>
          <div className='OpcionesSidebar'>
            <Link to="/ProfilePage"><h4 className='OpcionSidebar' id='Blue2'>Perfil</h4></Link>
            <Link to="/ClassesPage"><h4 className='OpcionSidebar' id='Red2'>Clases</h4></Link>
            <Link to="/MarksPage"><h4 className='OpcionSidebar' id='Blue2'>Notas</h4></Link>
            <Link to="/AdvicesPage"><h4 className='OpcionSidebar' id='Red2'>Avisos</h4></Link>
            <button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
