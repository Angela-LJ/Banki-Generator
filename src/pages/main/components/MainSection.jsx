import React, { useState, useEffect } from 'react'
import { useQuestionGenerator } from '../hooks/QuestionGenerator.jsx'

export default function Main() {

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTypeValue, setSelectedTypeValue] = useState(null);
  const { currentQuestion, generateQuestionType } = useQuestionGenerator(); 

  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue)
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
      <div className='main-section flex'>
        <OptionsColumnOne
          selectedTypeValue={selectedTypeValue}
          handleTypeSelection={handleTypeSelection}
        />
        <QuestionCardShape 
        handleGenerateQuestion={handleGenerateQuestion}
        currentQuestion={currentQuestion.question}
        showAnswer={showAnswer}
        toggleAnswer={() => setShowAnswer(!showAnswer)}
        />
        <OptionsColumnTwo 
          selectedTypeValue={selectedTypeValue}
          handleTypeSelection={handleTypeSelection}
        />
      </div>
    </section>
  )
}

function QuestionCardShape({ handleGenerateQuestion, currentQuestion, showAnswer, toggleAnswer }) {

  return (
    <section className="card-shape">
      <div className="card-text">
      {currentQuestion && currentQuestion.question ? (
          showAnswer ? (currentQuestion.answer) : (currentQuestion.question)
        ) : ('Select a new category and press generate')}
      </div>
      <div className="card-btn">
        <button className="generate-button button"
        onClick={handleGenerateQuestion}
        >Generate Question
        </button>
        <button className="toggle-btn button" id="answer-btn" onClick={toggleAnswer}>Show Answer</button>
      </div>
    </section>
  )
}

function OptionsColumnOne({ selectedTypeValue, handleTypeSelection }) {
  
  return (
    <div className="question-column-1">
      <div className="button-container">
        <button 
        className={`options-btn button ${selectedTypeValue === 'javascriptQ' ? 'selected-btn' : ''}`}
        id="javascriptQ" 
        onClick={() => handleTypeSelection('javascriptQ')}
        >
          Javascript Questions
        </button>
      </div>
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'gitQ' ? 'selected-btn' : ''}`}
        id="gitQ" 
        onClick={() => handleTypeSelection('gitQ')}
        >
        Git Questions
        </button>
      </div>
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'pythonQ' ? 'selected-btn' : ''}`}
        id="pythonQ" 
        onClick={() => handleTypeSelection('pythonQ')}
        >
        Python Questions
        </button>
      </div>
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'cQ' ? 'selected-btn' : ''}`}
        id="cQ" 
        onClick={() => handleTypeSelection('cQ')}
        >
        C Questions
        </button>
      </div>
    </div>
  )
}

function OptionsColumnTwo({ selectedTypeValue, handleTypeSelection }) {
  return (
    <div className="question-column-2">
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'javascriptP' ? 'selected-btn' : ''}`}
        id="javascriptP" 
        onClick={() => handleTypeSelection('javascriptP')}
        >
        Javascript Practice
        </button>
      </div>
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'pythonP' ? 'selected-btn' : ''}`}
        id="pythonP" 
        onClick={() => handleTypeSelection('pythonP')}
        >
        Python Practice
        </button>
      </div>
      <div className="button-container">
        <button
        className={`options-btn button ${selectedTypeValue === 'cP' ? 'selected-btn' : ''}`}
        id="cP" 
        onClick={() => handleTypeSelection('cP')}
        >
        C Practice
        </button>
      </div>
    </div>
  )
}