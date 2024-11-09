// src/components/Sidebar.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <ul>
          <li><Link to="/ProfilePage"><h4 className='OpcionSidebar'>Perfil</h4></Link></li>
          <li><Link to="/ClassesPage"><h4 className='OpcionSidebar'>Clases</h4></Link></li>
          <li><Link to="/MarksPage"><h4 className='OpcionSidebar'>Notas</h4></Link></li>
          <li><Link to="/AdvicesPage"><h4 className='OpcionSidebar'>Avisos</h4></Link></li>
          <li><button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
