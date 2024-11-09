import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import transition from "../transition";
import GradesTable from "../components/gradesComponent/grades";
import './MarksPage.css';

const MarksPage = () =>{
    const location = useLocation();
    const { studentName, studentId } = location.state || {};
    const [grades, setGrades] = useState([]);
    const [categories, setCategories] = useState([]);
    const [terms, setTerms] = useState([]);
    return(
        <div className='ContenedorMarksPage'>
            <div className='ContenidoMarksPage'>
            <h3>Notas del Estudiante</h3>
            <GradesTable grades={grades} categories={categories} terms={terms} id="GradesTable"/>
            </div>
        </div>
    )
}

export default transition(MarksPage);