import React from 'react';

type Props = {
    shadow: boolean;
    isNavbarExpanded: boolean;

}
const MainNavbar: React.FC<Props> = ({shadow, isNavbarExpanded}) => {
    return (
        <nav className={`main-navbar ${shadow ? 'navbar-shadow' : ''} ${isNavbarExpanded ? 'expanded' : ''}`}>
        <div className='navbar-logo'>
          <span className='navbar-logo-first-element'>Erasmus+ 2024 | </span>
          <span className='navbar-logo-second-element'>Hiszpania</span>
        </div>
        <div className='navbar-menu'>
          <a href='#top' className='navbar-menu-item'>
            Strona główna
          </a>
          <a href='#o-projekcie' className='navbar-menu-item'>
            O projekcie
          </a>
          <a href='#lista-uczniow' className='navbar-menu-item'>
            Lista uczesników
          </a>
          <a href='/' className='navbar-menu-item'>
            Galeria
          </a>
        </div>
      </nav>
    );
};

export default MainNavbar;