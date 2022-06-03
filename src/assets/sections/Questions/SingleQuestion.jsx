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
        <HiOutlinePlusSm />
      </button>

      {showAnswer ? (
        <div className="single-answer">
          <p>{answer}</p>

          {itens.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SingleQuestion;
