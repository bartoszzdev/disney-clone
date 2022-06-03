import React from "react";
import './style.css';
// PLANS FILE
import { planos } from '../../../planos'

const Planos = ({ plansSection }) => {
  return (
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
  );
};

export default Planos;