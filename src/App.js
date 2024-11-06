import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home/homeComponent'; 
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SchedulesPage from './pages/SchedulesPage';
import VideosPage from './pages/VideosPage';


const App = () => {

    const location = useLocation();
    return (
        <>
            <Header />
            <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path='/BlogPage' element={<BlogPage />} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='/SchedulePage' element={<SchedulesPage />} />
            <Route path='/VideosPage' element={<VideosPage />} />
            </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;


