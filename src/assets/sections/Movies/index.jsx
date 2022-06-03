import React from "react";
import "./style.css";
// MOVIES FILE
import { movies } from "../../../movies";

const MoviesSection = () => {
  return (
    <section className="movie-section">
      <h2>Originais Disney+ exclusivos</h2>
      <p>
        Só no Disney+ você vê os melhores filmes, séries, curtas e outros
        conteúdos inéditos.
      </p>

      <ul className="movie-list">
        {movies.map((movie, index) => {
          return (
            <li key={index}>
              <img src={movie} alt="Movie" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesSection;
