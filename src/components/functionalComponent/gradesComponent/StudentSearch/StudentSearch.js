import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentSearch.css'; // Archivo CSS para estilos

const StudentSearch = ({ onSelectStudent }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Para guardar el alumno seleccionado

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/obtenerAlumnos');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === '') {
      setFilteredStudents(['']); // Si el campo está vacío, no mostrar nada
    } else {
      setFilteredStudents(
        students.filter(student =>
          student.nombre.toLowerCase().includes(term)
        )
      );
    }
  };

  const handleSelectStudent = (id, name) => {
    onSelectStudent(id); // Llamar la función pasada por props
    setSelectedStudent(name); // Mostrar el nombre del alumno seleccionado
    setSearchTerm(''); // Limpiar el campo de búsqueda
    setFilteredStudents([]); // Limpiar la lista de resultados
  };

  return (
    <div className="content-StudentSearch">
      <h2>Subir Notas</h2>
      <input
        type="text"
        placeholder="Buscar alumno por nombre"
        value={searchTerm}
        onChange={handleSearch}
        className="Input-Buscar"
      />
        <p className='Mensaje-Seleccionado'>Alumno Seleccionado</p>
      {/* Si hay un alumno seleccionado, mostrarlo */}
      {selectedStudent ? (
        <div className='a'>
          <p className='Mensaje-Seleccionado2'>{selectedStudent}</p>
        </div>
      ) : (
        // Mostrar la lista de resultados solo si hay resultados
        filteredStudents.length > 0 && (
          <ul className="lista-Estudiantes">
            {filteredStudents.map(student => (
              <li key={student.id_alumno} className="student-item">
                {student.nombre}
                <button
                  onClick={() => handleSelectStudent(student.id_alumno, student.nombre)}
                  className="select-button"
                >
                  Seleccionar
                </button>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default StudentSearch;
