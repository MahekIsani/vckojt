import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Apply from './Pages/Apply';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Mahek Iqbal Isani"
          studentPhotoUrl="/maku.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <ChatbotComponent></ChatbotComponent>
      <Footer/>
      </>
    
  );
};

export default App;
