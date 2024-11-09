import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grades from '../gradesComponent/grades'

const HomeStudent = () => {
    const location = useLocation();
    const [userName, setUserName] = useState(location.state?.userName || '');

    useEffect(() => {
        // Si no hay `userName` en `location.state`, carga el nombre desde `localStorage`
        if (!userName) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.nombre) {
                setUserName(user.nombre);
            }
        }
    }, [userName]);

    return (
        <div>
            <h1>Bienvenido, {userName}!</h1>
            <Grades />

        </div>
        
    );
};

export default HomeStudent;