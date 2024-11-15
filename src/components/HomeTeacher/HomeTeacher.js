import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserRegistration from '../UserRegistration/UserRegistration';
import StudentGrades from '../gradesComponent/StudentGrades/StudentGrades';

const HomeTeacher = () => {
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
            <UserRegistration />
            <StudentGrades />

        </div>
        
    );
};

export default HomeTeacher;