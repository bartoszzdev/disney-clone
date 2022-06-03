import React from "react";
import "./style.css";
// SINGLE QUESTION COMPONENT
import SingleQuestion from "./SingleQuestion";
// QUESTIONS FILE
import { questions } from "../../../questions";

const QuestionSection = () => {
  return (
    <section className="question-section">
      <h2>Perguntas Frequentes</h2>

      <div className="questions">
        {questions.map((question, index) => {
          return <SingleQuestion key={index} {...question} />
        })}
      </div>
    </section>
  );
};

export default QuestionSection;
