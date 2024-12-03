// src/components/Sidebar.js
import React, { useState, useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { UserContext } from '../functionalComponent/UserContext/UserContext'; // Importar el contexto
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
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const {setUserName} = useContext(UserContext); // Usar el contexto
 
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserName(''); // Limpiar el nombre del usuario en el contexto
        navigate('/');
    };
    let content;
    if (user.rol === 1){
      content = (
        <div className='OpcionesSidebar'>
            <Link to="/home-admin"><h4 className='OpcionSidebar' id='Blue2'>Perfil</h4></Link>
            <Link to="/UserManagement"><h4 className='OpcionSidebar' id='Red2'>Crear Usuario</h4></Link>
            <Link to="/UserManagement"><h4 className='OpcionSidebar' id='Red2'>Modificar Clases</h4></Link>
            <button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button>
        </div>
      );
    } else if (user.rol === 2){
      content = (
        <div className='OpcionesSidebar'>
            <Link to="/home-teacher"><h4 className='OpcionSidebar' id='Blue2'>Perfil</h4></Link>
            <Link to="/Create-User"><h4 className='OpcionSidebar' id='Red2'>Alumnos</h4></Link>
            <Link to="/Upload-Marks"><h4 className='OpcionSidebar' id='Red2'>Subir Notas</h4></Link>
            <Link to="/Not-Ready"><h4 className='OpcionSidebar' id='Red2'>Avisos</h4></Link>
            <button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button>
        </div>
      );
    } else if (user.rol === 3){
      content = (
        <div className='OpcionesSidebar'>
            <Link to="/home-student"><h4 className='OpcionSidebar' id='Blue2'>Perfil</h4></Link>
            <Link to="/UserManagement"><h4 className='OpcionSidebar' id='Red2'>Mis Clases</h4></Link>
            <Link to="/Student-Marks"><h4 className='OpcionSidebar' id='Red2'>Mis Notas</h4></Link>
            <Link to="/Not-Ready"><h4 className='OpcionSidebar' id='Red2'>Avisos</h4></Link>
            <button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button>
        </div>
      );
    } else {
      content = (
          <div className='OpcionesSidebar'>
              <h4>No tienes permisos asignados</h4>
              <button onClick={handleLogout} className='LogOutBTN'>Cerrar Sesion</button>
          </div>
      );
  }

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
          {content}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
