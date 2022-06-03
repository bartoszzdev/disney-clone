import React from "react";
import './style.css';
/*LOGO*/
import Logo from '../../images/logo.svg';

const Header = ({ showNavbar }) => {
  return (
    <>
      <button type="button" className="btn-entrar">
        Entrar
      </button>

      <header className={`header ${showNavbar && "display-header"}`}>
        <img src={Logo} alt="Disney+ logo" className="logo" />

        <div>
          <button type="button" className="btn-assinar">
            Assine agora
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
