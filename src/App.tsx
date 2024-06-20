import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import VideosGallery from './Pages/Gallery';
import ProjectResults from './Pages/ProjectResults';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/gallery/:section?' element={<VideosGallery />} />
        <Route path='/posters' element={<ProjectResults />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
