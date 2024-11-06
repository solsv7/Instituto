// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import perfBtn from '../iconos/perfil.png'

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
        {isOpen } <img src={perfBtn} alt=''></img>
      </button>

      {}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Opciones</h2>
        <ul>
          <li><a href="#section1">Perfil</a></li>
          <li><a href="#section2">Clases</a></li>
          <li><a href="#section3">Notas</a></li>
          <li><a href="#section4">Avisos</a></li>
          <li><a href="#section5">Cerrar Sesion</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
