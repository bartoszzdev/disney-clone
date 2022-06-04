import { useState } from "react";
import "./style.css";
// PLUS/MINUS ICONS
import { HiMinus, HiOutlinePlusSm } from "react-icons/hi";

const SingleQuestion = ({ question, answer, itens }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="single-question">
      <button type="button" onClick={() => setShowAnswer(!showAnswer)}>
        {question}
        
        {showAnswer ? (
          <HiMinus />
        ) : (
          <HiOutlinePlusSm />
        )}
      </button>

      {showAnswer ? (
        <div className="single-answer">
          <p>{answer}</p>

          <ul>
            {itens.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SingleQuestion;
