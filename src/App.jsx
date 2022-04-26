import { useState, useEffect, useRef } from 'react'
import './App.css'
import Logo from './assets/images/logo.svg'
import infoImg from './assets/images/info.png'
import { planos } from './planos'
import { MdKeyboardArrowDown } from 'react-icons/md'

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
    </>
  )
}

export default App
