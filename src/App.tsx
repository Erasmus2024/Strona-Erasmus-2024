import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
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
