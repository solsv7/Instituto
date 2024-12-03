import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './grade.css';

const GradesTable = () => {
    const [studentId, setStudentId] = useState(null);
    const [grades, setGrades] = useState([]);
    const [organizedGrades, setOrganizedGrades] = useState({});
    const [error, setError] = useState(null);

  // Categorías que deben coincidir con las categorías de las calificaciones
    const categories = [
    'Expresion Oral', 'Expresion Escrita', 'Expresion Auditiva',
    'Estrategias, desarrollo y resolucion', 'Actitud y desempeño'];

    useEffect(() => {
    // Obtener el ID del estudiante desde el localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const studentId = storedUser ? storedUser.id_alumno : null;

    if (studentId) {
        setStudentId(studentId);
    }
    }, []);

    useEffect(() => {
    if (studentId) {
        const fetchGrades = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/grades/${studentId}`);
            const fetchedGrades = response.data;

            if (fetchedGrades.length === 0) {
            setError('No se encontraron calificaciones para este estudiante.');
            setGrades([]);
            setOrganizedGrades({});
            return;
            }

          setError(null); // Limpiar el error
            setGrades(fetchedGrades);

          // Organizar las calificaciones por periodo y tipo de nota
            const gradesByPeriod = fetchedGrades.reduce((acc, grade) => {
            const { periodo, tipo_nota, nota } = grade;

            // Inicializamos el periodo si no existe en el objeto
            if (!acc[periodo]) {
                acc[periodo] = {};
            }

            // Asignamos la nota al tipo de nota dentro del periodo
            acc[periodo][tipo_nota] = nota;

            return acc;
            }, {});

            setOrganizedGrades(gradesByPeriod);
        } catch (error) {
            console.error('Error fetching grades:', error);
            setError('Hubo un error al obtener las calificaciones.');
        }
        };

        fetchGrades();
    }
    }, [studentId]);

    return (
    <div className="table-container">
      <h2>Notas del Estudiante</h2>
      {/* Mostrar mensaje de error si no hay calificaciones o si ocurre un error */}
        {error && <p>{error}</p>}

      {/* Mostrar la tabla solo si hay calificaciones */}
        {Object.keys(organizedGrades).length > 0 && (
        <table className='Tabla-Notas'>
            <thead>
            <tr>
                <th>Periodo</th>
              {/* Crear las columnas para cada categoría de nota */}
                {categories.map((category, index) => (
                <th key={index}>{category}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {/* Iterar sobre los periodos y sus calificaciones */}
            {Object.keys(organizedGrades).map((periodo) => (
                <tr key={periodo}>
                <td className='Periodo'>{periodo}</td>
                {/* Para cada periodo, se mostrarán las notas correspondientes a cada categoría */}
                {categories.map((category) => (
                    <td key={category} id='NotaNumero'>
                    {organizedGrades[periodo][category] || 'N/A'} {/* Mostrar 'N/A' si no hay nota */}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        )}
    </div>
    );
};

export default GradesTable;