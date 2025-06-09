import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import CoursesPage from "./Pages/CoursesPage.jsx";

import ContactPage from './Pages/ContactPage.jsx';
import AdmissionPage from './Pages/AdmissionPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';

// Components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
