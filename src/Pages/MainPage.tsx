import React from 'react';
import './PageStyles/MainPage.scss';
import Connection from "../images/connection.jpg";
import MalagaLandscape from "../images/malaga-landscape.webp";
import Working from "../images/working.jpg";


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
      <section className='about'>
        <div className='description'>
          <span className='description-title'>
            Projekt Erasmus+ 2024 w Maladze
          </span>
          <div className="description-content">
            <div className="description-text-image">
              <p className="description-text">
Program Erasmus+ na rok 2024 w Maladze otwiera przed studentami naszej Szkoły wyjątkową szansę zanurzenia się w kulturowe, historyczne i edukacyjne bogactwo południowej Hiszpanii. Celem projektu jest nie tylko umożliwienie uczestnikom zdobycia międzynarodowego doświadczenia, ale także zapewnienie im możliwości zgłębienia unikatowych wartości i tradycji regionu, co przyczyni się do ich rozwoju osobistego i zawodowego.
              </p>
              <img className='description-image' src={MalagaLandscape} alt="Malaga Landscape" />
            </div>
            <div className="description-text-image reverse">
              <p className="description-text">
Uczestnicy będą mieli okazję uczestniczyć w kursach i warsztatach prowadzonych przez wybitnych ekspertów, co pozwoli im zgłębić wiedzę wykraczającą poza tradycyjne ramy uczelni. Malaga, z jej bogatą historią i kulturą, stanowi idealne tło dla dialogu międzykulturowego, zachęcając do eksploracji andaluzyjskiego dziedzictwa. Projekt kładzie również nacisk na rozwój osobisty i zawodowy, promując umiejętności miękkie, takie jak komunikacja międzykulturowa, adaptacja i zarządzanie projektem, które są cenione na globalnym rynku pracy. 
              </p>
              <img className='description-image' src={Working} alt="Working" />
            </div>
            <div className="description-text-image">
              <p className="description-text">
Poprzez wspólne projekty i inicjatywy, Erasmus+ 2024 ma na celu budowanie trwałych relacji i sieci kontaktów, które przetrwają długo po zakończeniu programu, przy jednoczesnym oczekiwaniu od uczestników zaangażowania, współpracy i poszanowania dla różnorodności kulturowej.
              </p>
              <img className='description-image' src={Connection} alt="Connection" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
