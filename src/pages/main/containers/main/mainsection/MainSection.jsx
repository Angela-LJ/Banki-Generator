import React, { useState } from 'react'
import { useQuestionGenerator } from '../../../hooks/QuestionGenerator.jsx'
import './mainsection.css'
import { DisplaySection } from '../../../components/index.js'
import { QuestionCardShape } from '../../index';


export default function Main({ selectedTypeValue }) {

  const [ showAnswer, setShowAnswer ] = useState(false);
  const { currentQuestion, generateQuestionType } = useQuestionGenerator(); 
  
  const handleGenerateQuestion = () => {
    generateQuestionType(selectedTypeValue);
    setShowAnswer(false);
  }

  return (
    <>
      <div className='main-section'>
        <section className="card-grid">
          <QuestionCardShape 
            handleGenerateQuestion={handleGenerateQuestion}
            currentQuestion={currentQuestion.question}
            showAnswer={showAnswer}
            toggleAnswer={() => setShowAnswer(!showAnswer)}
          />
        </section>
        <section className="display-container justify-self-center">
          <div className="display-type-section bg-black">
            <DisplaySection
              selectedTypeValue={selectedTypeValue}
            />
          </div>
        </section>
      </div>         
    </>
  )
}

