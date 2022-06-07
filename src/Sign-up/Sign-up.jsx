import React from "react";
import "./style.css";
// LOGO
import Logo from "../assets/images/logo.svg";
// REACT ROUTER DOM
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="login-container">
      <Link to="/">
        <img src={Logo} alt="Disney+ logo" className="logo" />
      </Link>

      <div className="signup-container">
        <h3>Use o seu e-mail para entrar</h3>

        <form className="signup-form">
          <input type="text" placeholder="E-mail" />
          <button type="button">Continuar</button>
        </form>

        <span>
          Não tem Disney+? <a href="#">Assine</a>
        </span>
      </div>
    </main>
  );
};

export default SignUp;
