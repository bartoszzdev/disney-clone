import React from "react";
import './style.css';
// INFO IMAGE
import infoImg from '../../images/info.png';

const InfoSection = () => {
  return (
    <section className='info-section'>
        <div className='info-text'>
          <h2>Assista do seu jeito</h2>
          <p>
          Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.
          </p>
        </div>

        <img src={infoImg} alt='Info-image' />
    </section>
  );
};

export default InfoSection;