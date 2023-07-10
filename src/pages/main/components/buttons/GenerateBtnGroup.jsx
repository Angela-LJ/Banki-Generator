import React from 'react';
import './buttons.css';

export default function ButtonGroup({ handleGenerateQuestion, toggleAnswer }) {
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

