import React from "react";
import './style.css';
// LOGO
import Logo from '../../images/logo.svg';
// ARROW ICON
import { MdKeyboardArrowDown } from 'react-icons/md'

const MainContainer = ({ scrollDown }) => {
  return (
    <section className='main-container'>
        <div className='main-content'>
          <h1>As melhores histórias em um só lugar.</h1>
          <img src={Logo} alt='Disney+ logo' className='logo-container' />
          <button type='button'>
            Escolha seu plano
          </button>

          <div className='links'>
            <a href='#'>Assinar somente o Disney+ mensal</a> | 
            <a href='#'> Assinar somente o Disney+ anual</a>
          </div>
        </div>

        <button type='button' className='arrow-btn' onClick={scrollDown}>
          <MdKeyboardArrowDown />
        </button>
      </section>
  );
};

export default MainContainer;