import React from 'react'
import './App.css'
import Logo from './assets/images/logo.svg'
import { planos } from './planos'
import { MdKeyboardArrowDown } from 'react-icons/md'

function App() {
  return (
    <>
      <button type='button' className='btn-entrar'>
        Entrar
      </button>

      <header className='header'>
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

        <button type='button' className='arrow-btn'>
          <MdKeyboardArrowDown />
        </button>
      </section>

      <section className='planos-section'>
        <h1>Escolha seu plano</h1>

        <div className='planos'>
          {planos.map(plano => {
            const { price, title, info } = plano

            return (
              <article className='single-plan'>
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
    </>
  )
}

export default App
