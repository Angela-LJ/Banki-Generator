import React, { useState } from 'react'
import { useQuestionGenerator } from '../../../hooks/QuestionGenerator.jsx'
import './mainsection.css'
import { ScrollBar } from '../../../components/index.js';
import { QuestionCardShape } from '../../index';

// import { sizes, useMediaQuery } from '../../../hooks/MediaQueries.jsx'

export default function Main() {

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTypeValue, setSelectedTypeValue] = useState('javascript');
  const { currentQuestion, generateQuestionType } = useQuestionGenerator(); 

  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue);
  }
  
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
      <div className='flex justify-center w-full'>
        <ScrollBar 
          handleTypeSelection={handleTypeSelection}
          />
      </div>
    </>
  )
}

