import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UploadGrade.css';

const UploadGrade = ({ selectedStudentId }) => {
  const [grades, setGrades] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [categories, setCategories] = useState([]);

  // Cargar los periodos y categorías desde la API
  useEffect(() => {
    const fetchPeriods = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/periodos');
        setPeriods(response.data);
      } catch (error) {
        console.error('Error fetching periods:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchPeriods();
    fetchCategories();
  }, []);

  const handleGradeChange = (periodId, categoryId, value) => {
    const newGrades = [...grades];
    const gradeIndex = newGrades.findIndex(
      (grade) => grade.periodId === periodId && grade.categoryId === categoryId
    );

    if (gradeIndex === -1) {
      newGrades.push({ periodId, categoryId, grade: value });
    } else {
      newGrades[gradeIndex].grade = value;
    }

    setGrades(newGrades);
  };

  const handleReset = () => {
    setGrades([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      for (const grade of grades) {
        await axios.post('http://localhost:3001/api/grades/subir', {
          idAlumno: selectedStudentId,
          idPeriodo: grade.periodId,
          idTipoNota: grade.categoryId,
          nota: parseFloat(grade.grade),
        });
      }

      alert('Notas subidas exitosamente.');
    } catch (error) {
      console.error('Error uploading grades:', error);
      alert('Error al subir las notas.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-grade">
      <table className="grades-table">
        <thead>
          <tr>
            <th>Periodo</th>
            {categories.map((category) => (
              <th key={category.id_tipo}>{category.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((period) => (
            <tr key={period.id_periodo}>
              <td>{period.nombre}</td>
              {categories.map((category) => {
                const existingGrade = grades.find(
                  (grade) => grade.periodId === period.id_periodo && grade.categoryId === category.id_tipo
                );

                return (
                  <td key={category.id_tipo}>
                    <input
                      type="number"
                      step="0.1"
                      value={existingGrade ? existingGrade.grade : ''}
                      onChange={(e) =>
                        handleGradeChange(period.id_periodo, category.id_tipo, e.target.value)
                      }
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Subir Notas</button>
      <button type="button" onClick={handleReset} className="reset-button">Limpiar Cambios</button>
    </form>
  );
};

export default UploadGrade;
