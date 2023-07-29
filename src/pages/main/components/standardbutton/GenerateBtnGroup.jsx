import React from 'react';
import './buttons.css';
import { useCardTextContext } from "../../hooks/CardTextContext";

export default function ButtonGroup({}) {
  const {    
    handleGenerateQuestion, 
    toggleAnswer,     
  } = useCardTextContext();
  return (
    <div className="card-btn">
      <button className="generate-button button" onClick={handleGenerateQuestion}>
        Generate Question
      </button>
      <button className="toggle-btn button" id="answer-btn" onClick={toggleAnswer}>
        Show Answer
      </button>
    </div>
  );
}

