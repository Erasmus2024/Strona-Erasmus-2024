import React from 'react';
import './PageStyles/MainPage.scss';
const MainPage: React.FC = () => {
  return (
    <div className='container'>
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
            Lista uczesników
          </a>
          <a href='/' className='navbar-menu-item'>
            Galeria
          </a>
        </div>
      </nav>
      <section className='hero'>
        <div className='main-content'>
          <div className='main-title'>
            <span id='hero-first-element'>Praktyki zagraniczne Elektronika</span> <br />
            <span id='hero-second-element'>Malaga, 2024</span>
          </div>
          <div className='hero-menu'>
            <a href='/' className='hero-menu-item'>
              O projekcie
            </a>
            <a href='/' className='hero-menu-item'>
              Oczekiwania uczestników
            </a>
            <a href='/' className='hero-menu-item'>
              Przebieg projektu
            </a>

            <a href='/' className='hero-menu-item'>
              Galeria i multimedia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
