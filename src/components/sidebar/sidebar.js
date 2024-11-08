// src/components/Sidebar.js
import React, { useState } from 'react';
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

  return (
    <div>
      {}
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen } <img src={menuImagen} alt='' id='menuImagen'></img>
      </button>

      {}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Opciones</h2>
        <ul>
          <li><Link to="/ProfilePage">Perfil</Link></li>
          <li><Link to="/ClassesPage">Clases</Link></li>
          <li><Link to="/MarksPage">Notas</Link></li>
          <li><Link to="/AdvicesPage">Avisos</Link></li>
          <li><Link to="/">Cerrar Sesion</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
