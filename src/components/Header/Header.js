import React, { useState } from 'react';
import './header.css';
import Login from '../Login/LoginComponent';
import logo from './logo.png';
import perfil from './perfil.png'
import { useNavigate } from 'react-router-dom'; 
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/'); 
    };
    const [show, setShow] = useState(false);


    function changeVis(){
        setShow(!show);
        console.log('estado es : ', {show})
        if (show === true){
            document.getElementById('formulario').style.animation = 'leave 1s ease-in-out'
            document.getElementById('formulario').style.display = 'none'
        } else{
            document.getElementById('formulario').style.animation = 'enter 1s ease-in-out'
            document.getElementById('formulario').style.display = 'block'
        }
    }
   

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="nav-links">
                    <h3><Link to="/">Home</Link></h3>
                    <h3><Link to="/AboutPage">About us</Link></h3>
                    <h3><Link to="/SchedulePage">Schedule</Link></h3>
                    <h3><Link to="/BlogPage">Blog</Link></h3>
                    <h3><Link to="/VideosPage">Videos</Link></h3>
                    <div className="login-container">
                        {token ? (
                            <div className='log-perf'>
                                <button className="logout-button" onClick={handleLogout}>"Nombre de Usuario"</button>
                                <img src={perfil} className='ftPerfil' alt=''></img>
                                
                            </div>
                        ) : (
                            <>
                                <button className="login-button" onClick={changeVis}>Login</button>
                                <Sidebar />
                                <div className="login-form" id='formulario' >
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