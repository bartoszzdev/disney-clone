import { useState, useEffect, useRef } from 'react'
//import './App.css'

// SECTIONS
import Header from './assets/sections/Header/index';
import MainContainer from './assets/sections/Main/index';
import PlanosSection from './assets/sections/Planos/index';
import InfoSection from './assets/sections/Info/index';
import MovieSection from './assets/sections/Movies/index';
import DownloadSection from './assets/sections/Download/index';
import AccessibilitySection from './assets/sections/Accessibility/index';
import QuestionSection from './assets/sections/Questions/index';

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const plansSection = useRef(null)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > plansSection.current.offsetTop - 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    })
  }, [])

  const scrollDown = () => {
    scroll({
      top: plansSection.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>
      <Header showNavbar={showNavbar} />
      <MainContainer scrollDown={scrollDown} />
      <PlanosSection plansSection={plansSection} />
      <InfoSection />
      <MovieSection />
      <DownloadSection />
      <AccessibilitySection />
      <QuestionSection />
    </>
  )
}

export default App



/*
import Logo from './assets/images/logo.svg'
import infoImg from './assets/images/info.png'
import { planos } from './planos'
import { movies } from './movies'
import { MdKeyboardArrowDown } from 'react-icons/md'

// ACCESSIBILITY ICONS
import computerImg from './assets/images/screen1.png'
import screenImg from './assets/images/screen2.png'
import controlImg from './assets/images/control.png'
import phoneImg from './assets/images/phone.png'

return (
    <>
      <button type='button' className='btn-entrar'>
        Entrar
      </button>

      <header className={`header ${showNavbar && 'display-header'}`}>
        <img src={Logo} alt='Disney+ logo' className='logo' />

        <div>
          <button type='button' className='btn-assinar'>
            Assine agora
          </button>
        </div>
      </header>

      <section className='main-container'>
        <div className='main-content'>
          <h1>As melhores histórias em um só lugar.</h1>
          <img src={Logo} alt='Disney+ logo' className='logo-container' />
          <button type='button'>
            Escolha seu plano
          </button>

          <div className='links'>
            <a href=''>Assinar somente o Disney+ mensal</a> | 
            <a href=''> Assinar somente o Disney+ anual</a>
          </div>
        </div>

        <button type='button' className='arrow-btn' onClick={scrollDown}>
          <MdKeyboardArrowDown />
        </button>
      </section>

      <section className='planos-section' ref={plansSection}>
        <h1>Escolha seu plano</h1>

        <div className='planos'>
          {planos.map(plano => {
            const { id, price, title, info } = plano

            return (
              <article key={id} className='single-plan'>
                <h3 className='title-plan'>{title}</h3>
                <h2 className='price-plan'>{price}</h2>
                <p className='info-plan'>{info}</p>
                <button type='button' className='plan-btn'>
                  Assine agora
                </button>
              </article>
            )
          })}
        </div>

        <span>*O preço pode variar caso a assinatura seja feita através de outras plataformas.</span>
      </section>

      <section className='info-section'>
        <div className='info-text'>
          <h2>Assista do seu jeito</h2>
          <p>
          Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.
          </p>
        </div>

        <img src={infoImg} alt='Info-image' />
      </section>

      <section className='movie-section'>
        <h2>Originais Disney+ exclusivos</h2>
        <p>
          Só no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos inéditos.
        </p>

        <ul className='movie-list'>
          {movies.map(movie => {
            return (
              <li>
                <img src={movie} alt='' />
              </li>
            )
          })}
        </ul>
      </section>

      <section className='download-section'>
        <div className='download-text'>
          <h2>Baixe filmes e séries</h2>
          <p>
            Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.
          </p>
        </div>
      </section>

      <section className='accessibility-section'>
          <h2>Disponível nos seus dispositivos favoritos</h2>

          <div className='accessibility-screens'>
            <div className='single-screen'>
              <img src={computerImg} alt='Computer' />
              <h3>Computador</h3>
              <ul>
                <li>Chrome OS</li>
                <li>MacOS</li>
                <li>PC Windows</li>
              </ul>
            </div>

            <div className='single-screen'>
              <img src={screenImg} alt='Tv screen' />
              <h3>TV</h3>
              <ul>
                <li>Amazon Fire TV</li>
                <li>Android TV</li>
                <li>Apple TV</li>
                <li>Chromecast</li>
                <li>TVs LG</li>
                <li>Roku</li>
                <li>Samsung</li>
              </ul>
            </div>

            <div className='single-screen'>
              <img src={controlImg} alt='Controller' />
              <h3>Videogames</h3>
              <ul>
                <li>PS4</li>
                <li>PS5</li>
                <li>Xbox One</li>
                <li>Xbox Series X</li>
                <li>Xbox Series S</li>
              </ul>
            </div>

            <div className='single-screen'>
              <img src={phoneImg} alt='Cellphone' />
              <h3>Celulares e tablets</h3>
              <ul>
                <li>Tablets Amazon Fire</li>
                <li>Celulares e Tablets Android</li>
                <li>iPhone e iPad</li>
              </ul>
            </div>
          </div>
      </section>
    </>
  )




*/