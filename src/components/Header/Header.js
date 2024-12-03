import React, { useContext, useState } from 'react';
import './header.css';
import Login from '../HomePageComponents/Login/LoginComponent';
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../functionalComponent/UserContext/UserContext'; // Importar el contexto
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const { userName} = useContext(UserContext); // Usar el contexto
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

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
    function checkRole(){
        if (user.rol === 1) {
            navigate('/home-admin');
        } else if (user.rol === 2) {
            navigate('/home-teacher');
        } else if (user.rol === 3) {
            navigate('/home-student');
        } else {
            navigate('/ProfilePage');
        }
    }

    return (
            <header className="header">
                <div className='ContenedorTitle'>
                    <div className="Title">
                        <div className='Word'><p id='Blue'>S</p><p id='Red'>t</p></div><div className='Word'><p id='Blue'>T</p><p id='Red'>h</p><p id='Blue'>o</p><p id='Red'>m</p><p id='Blue'>a</p><p id='Blue'>s</p></div>
                    </div>
                </div>
                <nav className="nav-links">
                    <h3><Link to="/" className='btn btn-left'>Home</Link></h3>
                    <h3><Link to="/AboutPage" className='btn btn-left'>About Us</Link></h3>
                    <h3><Link to="/SchedulePage" className='btn btn-left'>Schedule</Link></h3>
                    <h3><Link to="/BlogPage" className='btn btn-left'>Blog</Link></h3>
                    <h3><Link to="/VideosPage" className='btn btn-left'>Videos</Link></h3>
                    <div className="login-container">
                        {token ? (
                            <div className="log-perf">
                                <button onClick={checkRole}>
                                    <h3 className='btn btn-left'  id='user'>
                                    {userName ? `${userName}` : "Usuario"}
                                    </h3>
                                </button>
                                <div className='BTNSidebar'>
                                <Sidebar />
                                </div>
                            </div>
                        ) : (
                            <>
                                <button className="login-button" onClick={changeVis}>Sign In</button>
                                
                                <div className="login-form" id="formulario">
                                    <Login />
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </header>
    );
};

export default Header;
