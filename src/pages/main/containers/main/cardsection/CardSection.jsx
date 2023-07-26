import React from 'react';
import { ButtonGroup } from '../../../components/index';
import './cardsection.css'
import { useCardTextContext } from "../../../hooks/CardTextContext";

export default function QuestionCardShape({ }) {
  const cardTextContext = useCardTextContext();
  
  const { question, answer, example } = cardTextContext.currentQuestion || {};

  return (
    <>
      <div className="card-shape">
        <div className="card-text">
          {question ? (cardTextContext.showAnswer ? ((
                <ul className="text-ul">
                  {answer.map((item, index) => (
                    <li key={index}>
                      <pre className="answer whitespace-pre-wrap break-words">{item}</pre>
                    </li>
                  ))}
                </ul>
            )) : (
              question.split('\n').map((line, lineIndex) => (
                <div key={lineIndex}>
                  <pre className="question whitespace-pre-wrap break-words">{line}</pre>
                </div>
              )))
          ) : ('Select a new category and press generate')}
        </div>
      </div>
    </>
  )
}