import React, { useState } from "react";
import "../Style/quizquestion.css"; // Atualizado para o caminho correto

const QuizQuestion = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    // Validar a resposta correta
    setIsCorrect(value === "value-2");
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      <div className="info">
        <span className="question">O outubro rosa é o mês da consciência e prevenção ao:</span>
        <span className="steps">3/10</span>
      </div>
      <div className="options">
        <div className="option">
          <input
            type="radio"
            id="value-1"
            name="value-radio"
            value="value-1"
            onChange={handleChange}
            checked={selectedValue === "value-1"}
          />
          <label htmlFor="value-1">Câncer de próstata</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="value-2"
            name="value-radio"
            value="value-2"
            onChange={handleChange}
            checked={selectedValue === "value-2"}
          />
          <label htmlFor="value-2">Câncer de mama</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="value-3"
            name="value-radio"
            value="value-3"
            onChange={handleChange}
            checked={selectedValue === "value-3"}
          />
          <label htmlFor="value-3">Suicídio</label>
        </div>
      </div>
      {showResult && (
        <span className={isCorrect ? "success" : "error"}>
          {isCorrect ? "Resposta correta!" : "Resposta incorreta. Tente novamente."}
        </span>
      )}
    </div>
  );
};

export default QuizQuestion;
