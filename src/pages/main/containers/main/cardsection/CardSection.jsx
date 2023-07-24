import React from 'react';
import { ButtonGroup } from '../../../components/index';
import './cardsection.css'

export default function QuestionCardShape({ handleGenerateQuestion, currentQuestion, showAnswer, toggleAnswer }) {
  
  return (
    <>
      <div className="card-shape">
        <div className="card-text answer-list">
          {currentQuestion && currentQuestion.question ? (
            showAnswer ? (
              Array.isArray(currentQuestion.answer) ? (
                <ul className="">
                  {currentQuestion.answer.map((item, index) => (
                    <li key={index}><pre className="whitespace-pre-wrap break-words my-1">{item}</pre></li>
                  ))}
                </ul>
              ) : ( currentQuestion.answer )
            ) : ( currentQuestion.question.split('\n').map((line, lineIndex) =>
              <div key={lineIndex}>
                <pre className="whitespace-pre-wrap break-words my-1">{line}</pre>
              </div>                
                ) )
          ) : ( 'Select a new category and press generate' )}
        </div>
        <ButtonGroup
          handleGenerateQuestion={handleGenerateQuestion}
          toggleAnswer={toggleAnswer}
        />
      </div>
    </>
  );
}

