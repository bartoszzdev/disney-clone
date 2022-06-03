import React from "react";
import "./style.css";
// ACCESSIBILITY ICONS
import computerImg from '../../images/screen1.png';
import screenImg from '../../images/screen2.png';
import controlImg from '../../images/control.png';
import phoneImg from '../../images/phone.png';

const AccessibilitySection = () => {
  return (
    <section className="accessibility-section">
      <h2>Disponível nos seus dispositivos favoritos</h2>

      <div className="accessibility-screens">
        <div className="single-screen">
          <img src={computerImg} alt="Computer" />
          <h3>Computador</h3>
          <ul>
            <li>Chrome OS</li>
            <li>MacOS</li>
            <li>PC Windows</li>
          </ul>
        </div>

        <div className="single-screen">
          <img src={screenImg} alt="Tv screen" />
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

        <div className="single-screen">
          <img src={controlImg} alt="Controller" />
          <h3>Videogames</h3>
          <ul>
            <li>PS4</li>
            <li>PS5</li>
            <li>Xbox One</li>
            <li>Xbox Series X</li>
            <li>Xbox Series S</li>
          </ul>
        </div>

        <div className="single-screen">
          <img src={phoneImg} alt="Cellphone" />
          <h3>Celulares e tablets</h3>
          <ul>
            <li>Tablets Amazon Fire</li>
            <li>Celulares e Tablets Android</li>
            <li>iPhone e iPad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
