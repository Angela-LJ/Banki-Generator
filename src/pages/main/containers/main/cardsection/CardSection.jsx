import React from 'react';
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
            <div className="text-left max-w-2xl"> 
              <ul className="">
                  {answer.map((answer) => (
                    <li key={answer}>
                      <pre className="answer whitespace-pre-wrap break-words">{answer}</pre>
                    </li>
                  ))}
               </ul>
            </div>
            )) : (
              <div className="text-left max-w-2xl"> 
                {question.split('\n').map((line, lineIndex) => (
                <p key={lineIndex}>
                  <pre className="question whitespace-pre-wrap break-words">{line}</pre>
                </p>
              ))}
              </div>
            )
          ) : ('Select a new category and press generate')}
        </div>
      </div>
    </>
  )
}