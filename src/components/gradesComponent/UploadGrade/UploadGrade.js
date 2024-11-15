import React, { useState } from 'react';
import axios from 'axios';
import './UploadGrade.css';

const UploadGrade = ({ selectedStudentId }) => {
  const [period, setPeriod] = useState('');
  const [category, setCategory] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/grades/subir', {
        idAlumno: selectedStudentId,
        idPeriodo: parseInt(period),
        idTipoNota: parseInt(category),
        nota: parseFloat(grade),
      });

      alert('Nota subida exitosamente.');
    } catch (error) {
      console.error('Error uploading grade:', error);
      alert('Error al subir la nota.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-grade">
      <div>
        <label>Periodo:</label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Categoría:</label>
        <input
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nota:</label>
        <input
          type="number"
          step="0.1"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Subir Nota</button>
    </form>
  );
};

export default UploadGrade;
