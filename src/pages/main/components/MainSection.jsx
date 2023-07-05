import React from 'react'

export default function Main() {
  return (
    <section className="hero">
      <div className='main-section flex'>
        <OptionsColumnOne />
        <QuestionCardShape />
        <OptionsColumnTwo />
      </div>
    </section>
  )
}

function QuestionCardShape() {
  return (
    <section className="card-shape">
      <div className="card-text">
        <p className="question-section" id="question"> The 'name' variable in Python is a special variable that holds the name of the current module or script. When a module is imported, 'name' is set to the module's name. However, if the module is executed as the main script, 'name' is set to 'main'. This allows you to write code that will only be executed when the module is run directly and not when it is imported by another module.</p>
      </div>
      <div className="card-btn button">
        <button className="toggle-btn" id="answer-btn">Show Answer</button>
      </div>
    </section>
  )
}

function OptionsColumnOne() {
  return (
    <div className="question-column-1">
      <div className="button-container">
        <button className="options-btn button" id="javascriptQ">Javascript Questions</button>
      </div>
      <div className="button-container">
        <button className="options-btn button" id="gitQ">Git Questions</button>
      </div>
      <div className="button-container">
        <button className="options-btn button" id="pythonQ">Python Questions</button>
      </div>
      <div className="button-container">
        <button className="options-btn button" id="cQ">C Questions</button>
      </div>
    </div>
  )
}

function OptionsColumnTwo() {
  return (
    <div className="question-column-2">
      <div className="button-container">
        <button className="options-btn button" id="javascriptP">Javascript Practice</button>
      </div>
      <div className="button-container">
        <button className="options-btn button" id="pythonP">Python Practice</button>
      </div>
      <div className="button-container">
        <button className="options-btn button" id="cP">C Practice</button>
      </div>
    </div>
  )
}