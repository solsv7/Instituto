import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SchedulesPage from './pages/SchedulesPage';
import VideosPage from './pages/VideosPage';
import Redes from './components/Redes/Redes';
import ProfilePage from './pages/ProfilePage';
import ClassesPage from './pages/ClassesPage';
import MarksPage from './pages/MarksPage';
import AdvicesPage from './pages/AdvicesPage';
import HomeStudent from './components/HomeStudent/HomeStudent';
import HomeTeacher from './components/HomeTeacher/HomeTeacher';
import HomeAdmin from './components/HomeAdmin/HomeAdmin';



const App = () => {

    const location = useLocation();
    return (
        <>
        <Redes></Redes>
            <Header />
            <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path='/BlogPage' element={<BlogPage />} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='/SchedulePage' element={<SchedulesPage />} />
            <Route path='/VideosPage' element={<VideosPage />} />
            <Route path='/ProfilePage' element={<ProfilePage />} />
            <Route path='/home-student' element={<HomeStudent />} />
            <Route path='/home-teacher' element={<HomeTeacher />} />
            <Route path='/home-admin' element={<HomeAdmin />} />
            <Route path='/ClassesPage' element={<ClassesPage />} />
            <Route path='/MarksPage' element={<MarksPage />} />
            <Route path='/AdvicesPage' element={<AdvicesPage />} />
            </Routes>
            </AnimatePresence>
            
        </>
    );
};

export default App;


