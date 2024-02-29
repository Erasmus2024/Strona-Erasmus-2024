import React from 'react';
import './PageStyles/MainPage.scss';
const MainPage: React.FC = () => {
  return (
    <div>
      <nav className='main-navbar'>
        <div className='navbar-logo'>
          <span className='navbar-logo-first-element'>Erasmus+ 2024 | </span>
          <span className='navbar-logo-second-element'>Hiszpania</span>
        </div>
        <div className='navbar-menu'>
          <a href='/' className='navbar-menu-item'>
            Strona główna
          </a>
          <a href='/' className='navbar-menu-item'>
            O projekcie
          </a>
          <a href='/' className='navbar-menu-item'>
            Galeria
          </a>
          <a href='/' className='navbar-menu-item'>
            Lista uczesników
          </a>
        </div>
      </nav>
      <section className='hero'></section>
    </div>
  );
};

export default MainPage;
