import React, { useState, useEffect } from 'react'
import { useQuestionGenerator } from '../../../hooks/QuestionGenerator.jsx'
import './mainsection.css'
import { QuestionCardShape, OptionsColumnOne, OptionsColumnTwo } from '../../index.jsx';

// import { sizes, useMediaQuery } from '../../../hooks/MediaQueries.jsx'

export default function Main() {

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTypeValue, setSelectedTypeValue] = useState(null);
  const { currentQuestion, generateQuestionType } = useQuestionGenerator(); 

  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue);
  }
  
  const handleGenerateQuestion = () => {
    generateQuestionType(selectedTypeValue);
    setShowAnswer(false);
  }
  
  useEffect(() => {
    const storedTypeValue = localStorage.getItem('selectedTypeValue');
    if (storedTypeValue) {
      setSelectedTypeValue(storedTypeValue);
    } else {
      setSelectedTypeValue(null);
    }
  }, []);

  return (
    <section className="hero">
      <div className='main-section grid'>
        <div className='question-column-1'>
          <OptionsColumnOne
            selectedTypeValue={selectedTypeValue}
            handleTypeSelection={handleTypeSelection}
          />
        </div>
        <section className="card-grid">
          <QuestionCardShape 
            handleGenerateQuestion={handleGenerateQuestion}
            currentQuestion={currentQuestion.question}
            showAnswer={showAnswer}
            toggleAnswer={() => setShowAnswer(!showAnswer)}
          />
        </section>
        <div className="question-column-2">
          <OptionsColumnTwo 
            selectedTypeValue={selectedTypeValue}
            handleTypeSelection={handleTypeSelection}
          />
        </div>
      </div>
    </section>
  )
}

