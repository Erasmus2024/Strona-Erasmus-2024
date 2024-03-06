import React, { Dispatch, Ref, SetStateAction, useRef, useState } from 'react';
import './PageStyles/MainPage.scss';
import Connection from "../images/connection.jpg";
import MalagaLandscape from "../images/malaga-landscape.webp";
import Working from "../images/working.jpg";
import Expectations from "../Expectations.json";
import Expectation from '../Components/Expectation';


const MainPage: React.FC = () => {

  const expectationsListRef: Ref<HTMLDivElement> = useRef(null);
  const [expectationsListLeft, setExpectationsListLeft]: [number, Dispatch<SetStateAction<number>>] = useState(0); 

  const MoveLeft: () => void = () => {
    if(expectationsListLeft > ((Expectations.length - 3) * 33)*-1){
    if(expectationsListRef.current){
        expectationsListRef.current.style.left = (expectationsListLeft - 33) + "vw";
        setExpectationsListLeft(expectationsListLeft - 33);
    }
    }
  }

  const MoveRight: () => void = () => {
    if(expectationsListLeft === 0) return;
    if(expectationsListRef.current){
        expectationsListRef.current.style.left = (expectationsListLeft + 33) + "vw";
        setExpectationsListLeft(expectationsListLeft + 33);
    }
  }

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
          <a href='#o-projekcie' className='navbar-menu-item'>
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
            <a href='#o-projekcie' className='hero-menu-item'>
              O projekcie
            </a>
            <a href='#oczekiwania' className='hero-menu-item'>
              Oczekiwania uczestników
            </a>
            <a href='#przebieg' className='hero-menu-item'>
              Przebieg projektu
            </a>

            <a href='/' className='hero-menu-item'>
              Galeria i multimedia
            </a>
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='description' id="o-projekcie">
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
        <div className='description expectations' id="oczekiwania">
          <span className='description-title'>
            Nasze oczekiwania względem projektu
          </span>
          <div className="description-content">
            <div className='expectations-control'>
<svg className='left-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={MoveLeft} style={{visibility: expectationsListLeft > ((Expectations.length - 3) * 33)*-1 ? "visible" : "hidden"}}>
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
<svg className='right-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={MoveRight} style={{visibility: expectationsListLeft !== 0 ? "visible" : "hidden"}}>
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
            </div>
              <div className="expectations-list" ref={expectationsListRef}>
                {
                  Expectations.map((ex, index) => (
                    <Expectation key={index} author={ex.author} content={ex.content} />
                  ))
                }
              </div>
          </div>
        </div>
        <div className='description process' id="przebieg">
          <span className='description-title'>
            Przebieg projektu
          </span>
          <div className='description-content'>
                <table>
                  <thead>
                    <tr>
                      <th>Lp.</th>
                      <th>Opis działania</th>
                      <th>Data</th>
                      <th>Dodatkowe informacje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Spotkanie informacyjne dla klas IV, rozpoczęcie rekrutacji.</td>
                      <td>16.11.2023</td>
                      <td>
                        <a href="https://tiny.pl/cvzk5" target='_blank' rel="noreferrer" className='link-button'>
                          <span className="label">Przejdź</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>II etap rekrutacji - test z języka angielskiego.</td>
                      <td>08.12.2023</td>
                      <td>
                        <a href="https://tiny.pl/cvzkc" target='_blank' rel="noreferrer" className='link-button'>
                          <span className="label">Przejdź</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Ogłoszenie wyników rekrutacji</td>
                      <td>12.12.2023</td>
                      <td>
                        <a href="https://zse.edu.pl/news/1066/erasmus-wyniki-rekrutacji" target='_blank' rel="noreferrer" className='link-button'>
                          <span className="label">Przejdź</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Spotkanie z firmą przyjmującą z Malagi – przygotowanie kulturowe.</td>
                      <td>21.02.2024</td>
                      <td>
                      </td>
                    </tr>
                    <tr>
                      <td>5.</td>
                      <td>Przygotowanie do stażu – kursy języka angielskiego i hiszpańskiego.</td>
                      <td>22.02.2024 - 29.03.2024</td>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
