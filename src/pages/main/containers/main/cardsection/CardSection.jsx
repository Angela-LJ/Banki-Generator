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
        <div className="card-text answer-list">
          {question ? (
            cardTextContext.showAnswer ? (
              answer ? (
                <ul className="">
                  {answer.map((item, index) => (
                    <li key={index}>
                      <pre className="whitespace-pre-wrap break-words my-1">{item}</pre>
                    </li>
                  ))}
                </ul>
              ) : (
                <pre className="whitespace-pre-wrap break-words my-1">{answer}</pre>
              )
            ) : (
              question.split('\n').map((line, lineIndex) => (
                <div key={lineIndex}>
                  <pre className="whitespace-pre-wrap break-words my-1">{line}</pre>
                </div>
              ))
            )
          ) : (
            'Select a new category and press generate'
          )}
        </div>
      </div>
    </>
  )
}