import React, {useState, useEffect} from 'react';


const MainNavbar: React.FC = () => {

    
    const [shadow, setShadow] = useState(false);
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

    const expandNavbar: () => void = () => {
        setIsNavbarExpanded(!isNavbarExpanded);
      };
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setShadow(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        
        <nav className={`main-navbar ${shadow ? 'navbar-shadow' : ''} ${isNavbarExpanded ? 'expanded' : ''}`}>
        <div className='navbar-logo'>
          <span className='navbar-logo-first-element'>Erasmus+ 2024 | </span>
          <span className='navbar-logo-second-element'>Hiszpania</span>
        </div>
        <div className='navbar-menu'>
          <a href='/Strona-Erasmus-2024#top' className='navbar-menu-item'>
            Strona główna
          </a>
          <a href='/Strona-Erasmus-2024#o-projekcie' className='navbar-menu-item'>
            O projekcie
          </a>
          <a href='/Strona-Erasmus-2024#lista-uczniow' className='navbar-menu-item'>
            Lista uczesników
          </a>
          <a href='/Strona-Erasmus-2024/gallery' className='navbar-menu-item'>
            Galeria
          </a>
        </div>
        <div className='show-hide-navbar' onClick={() => expandNavbar()}>
        <div className='first-line'></div>
        <div className='second-line'></div>
        <div className='third-line'></div>
      </div>
      </nav>
      
    );
};

export default MainNavbar;