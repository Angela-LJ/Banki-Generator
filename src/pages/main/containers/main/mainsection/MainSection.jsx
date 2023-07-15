import React, { useState } from 'react'
import { useQuestionGenerator } from '../../../hooks/QuestionGenerator.jsx'
import './mainsection.css'
import { QuestionCardShape } from '../../index';

// import { sizes, useMediaQuery } from '../../../hooks/MediaQueries.jsx'

export default function Main({ selectedTypeValue }) {

  const [ showAnswer, setShowAnswer ] = useState(false);
  const { currentQuestion, generateQuestionType } = useQuestionGenerator(); 
  
  const handleGenerateQuestion = () => {
    generateQuestionType(selectedTypeValue);
    setShowAnswer(false);
  }
  
  return (
    <>
      <section className="hero">
        <div className='main-section grid'>
          <section className="card-grid">
            <QuestionCardShape 
              handleGenerateQuestion={handleGenerateQuestion}
              currentQuestion={currentQuestion.question}
              showAnswer={showAnswer}
              toggleAnswer={() => setShowAnswer(!showAnswer)}
            />
          </section>
        </div>
      </section>
    </>
  )
}

