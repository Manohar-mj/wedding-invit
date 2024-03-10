
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import DateReminder from './components/DateReminder';
import ImageGallery from './components/ImageGallery';
import WeddingTimeline from './components/WeddingTimeline';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <MainSection />
          <DateReminder />
          <ImageGallery />
          <WeddingTimeline />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
};

export default App;
