import React, { useContext, useState } from 'react';
import './header.css';
import Login from '../HomePageComponents/Login/LoginComponent';
import axios from 'axios';
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext'; // Importar el contexto
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const token = localStorage.getItem('token');
    const { userName} = useContext(UserContext); // Usar el contexto
    const { setUserName } = useContext(UserContext); 
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
                <div className='ContenedorTitle'>
                    <div className="Title">
                        <div className='Titl'><p id='Blue'>S</p><p id='Red'>t</p></div><div className='Titl'><p id='Blue'>T</p><p id='Red'>h</p><p id='Blue'>o</p><p id='Red'>m</p><p id='Blue'>a</p><p id='Blue'>s</p></div>
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
                                <button>
                                    <Link to="/ProfilePage" id='user'>
                                    <h3 className='btn btn-left'  id='user'>
                                    {userName ? `${userName}` : "Username"}
                                    </h3>
                                    </Link>
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
        </div>
    );
};

export default Header;
