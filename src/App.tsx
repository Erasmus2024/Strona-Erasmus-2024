import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/MainPage';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import VideosGallery from './Pages/Gallery';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/videosgallery' element={<VideosGallery />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
