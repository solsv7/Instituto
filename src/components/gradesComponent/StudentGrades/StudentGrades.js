import React, { useState } from 'react';
import StudentSearch from '../StudentSearch/StudentSearch';
import UploadGrade from '../UploadGrade/UploadGrade';
import './StudentGrades.css';

const StudentGrades = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    return (
    <div className="student-grades">
        <h1>Gestión de Notas</h1>
        <StudentSearch onSelectStudent={setSelectedStudentId} />
        {selectedStudentId && (
        <>
          <h2>Subir Nota para el alumno ID: {selectedStudentId}</h2>
          <UploadGrade selectedStudentId={selectedStudentId} />
        </>
      )}
    </div>
  );
};

export default StudentGrades;
