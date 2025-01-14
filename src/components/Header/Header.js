import React, { useContext, useRef, useState } from 'react';
import './header.css';
import Login from '../HomePageComponents/Login/LoginComponent';
import Sidebar from '../sidebar/sidebar';
import BandejaMSG from '../Advices/BandejaMSG';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../functionalComponent/UserContext/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const { userName } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // Referencias a las secciones
  const sectionHome = useRef(null);
  const sectionAbout = useRef(null);
  const sectionSchedule = useRef(null);
  const sectionBlog = useRef(null);
  const sectionVideos = useRef(null);

  // Función para cambiar la visibilidad del formulario de inicio de sesión
  function changeVis() {
    setShow(!show);
    if (show) {
        document.getElementById('formulario').style.animation = 'leave 1s ease-in-out';
        document.getElementById('formulario').style.display = 'none';
    } else {
        document.getElementById('formulario').style.animation = 'enter 1s ease-in-out';
        document.getElementById('formulario').style.display = 'block';
    }
}
  const location = useLocation();

  function goComponent (ref, x) {
  if (location.pathname === '/'){
    moveComp(ref, x);
  } else{};
  }

  // Función para desplazarse a una sección
  function moveComp  (ref, offset = 0) {
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth',
      });
    }
  };
  

  // Redirección basada en el rol del usuario
  const checkRole = () => {
    switch (user?.rol) {
      case 1:
        navigate('/home-admin');
        break;
      case 2:
        navigate('/home-teacher');
        break;
      case 3:
        navigate('/home-student');
        break;
      default:
        navigate('/ProfilePage');
        break;
    }
  };

  return (
    <header className="header">
      <div className="ContenedorTitle">
        <div className="Title">
          <div className="Word">
            <p id="Blue">S</p>
            <p id="Red">t</p>
          </div>
          <div className="Word">
            <p id="Blue">T</p>
            <p id="Red">h</p>
            <p id="Blue">o</p>
            <p id="Red">m</p>
            <p id="Blue">a</p>
            <p id="Blue">s</p>
          </div>
        </div>
      </div>
      <nav className="nav-links">
        {/* Navegación */}
        <h3 className="btn btn-left" onClick={() => goComponent(sectionHome,-100)}><Link to='/' className='linkStyle'>Home</Link></h3>
        <h3 className="btn btn-left" onClick={() => goComponent(sectionVideos)}>Videos</h3>

        {/* Contenedor de login */}
        <div className="login-container">
          {token ? (
            <div className="log-perf">
              <button onClick={checkRole}>
                <h3 className="btn btn-left" id="user">
                  {userName || 'Usuario'}
                </h3>
              </button>
              <div className='BTNAvisos'>
                <BandejaMSG />
              </div>
              <div className="BTNSidebar">
                <Sidebar />
              </div>
            </div>
          ) : (
            <>
                <h3 className="btn btn-left" id='inscription'>Inscripcion</h3>
                <button className="login-button" onClick={changeVis}>Sign In</button>
                
                <div className="login-form" id="formulario">
                    <Login />
                </div>
            </>
        )}
    </div>
</nav>

      {/* Secciones (pueden estar en otro componente) */}
      <section ref={sectionHome} id="home-section">Home Content</section>
      <section ref={sectionAbout} id="about-section">About Us Content</section>
      <section ref={sectionSchedule} id="schedule-section">Schedule Content</section>
      <section ref={sectionBlog} id="blog-section">Blog Content</section>
      <section ref={sectionVideos} id="videos-section">Videos Content</section>
    </header>
  );
};

export default Header;
