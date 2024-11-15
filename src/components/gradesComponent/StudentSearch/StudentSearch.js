import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentSearch.css';

const StudentSearch = ({ onSelectStudent }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/obtenerAlumnos');
        setStudents(response.data);
        setFilteredStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredStudents(
      students.filter(student =>
        student.nombre.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="student-search">
      <input
        type="text"
        placeholder="Buscar alumno por nombre"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredStudents.map(student => (
          <li key={student.id_alumno}>
            {student.nombre}
            <button onClick={() => onSelectStudent(student.id_alumno)}>Seleccionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSearch;

