import React, { useContext, useState } from 'react';
import './header.css';
import Login from '../HomePageComponents/Login/LoginComponent';
import logo from '../../images/logo.png';
import perfil from '../../images/perfil.png';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext'; // Importar el contexto

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { userName, setUserName } = useContext(UserContext); // Usar el contexto

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserName(''); // Limpiar el nombre del usuario en el contexto
        navigate('/');
    };

    const [show, setShow] = useState(false);

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

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" id='logo' />
                </div>
                <nav className="nav-links">
                    <h3><Link to="/">Home</Link></h3>
                    <h3><Link to="/AboutPage">About us</Link></h3>
                    <h3><Link to="/SchedulePage">Schedule</Link></h3>
                    <h3><Link to="/BlogPage">Blog</Link></h3>
                    <h3><Link to="/VideosPage">Videos</Link></h3>
                    <div className="login-container">
                        {token ? (
                            <div className="log-perf">
                                <button className="UserName" >
                                    <Link to="/ProfilePage">
                                    <h3>
                                    {userName ? `Hola, ${userName}` : "Nombre de Usuario"}
                                    </h3>
                                    </Link>
                                </button>
                                <Sidebar />
                            </div>
                        ) : (
                            <>
                                <button className="login-button" onClick={changeVis}>Login</button>
                                
                                <div className="login-form" id="formulario">
                                    <Login />
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
