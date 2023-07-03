import questionsAnswers from "./questions.js"

(function() {
  // Initialize variables with IIFE
  let currentQuestion = null;
  let showingQuestion = true;
  let askedQuestions = [];
  let shuffledQuestions = [];
  let questionIndex = 0;

  // Make sure DOM is fully loaded before use
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to generate button
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', function(event) {
      const selectedQuestionType = document.querySelector('option[name="question-type"]:checked').value;
      // Call load random question and pass in type and data
      loadRandomQuestion(event, selectedQuestionType, questionsAnswers);
    });
  });

  // Add event listener to radio buttons
  const questionTypeRadios = document.querySelectorAll('option[name="question-type"]');
  questionTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      // Reset question when new question type is selected
      askedQuestions = [];
      questionIndex = 0;
      showCurrentQuestion('Press button to generate question');
    });
  });

  function loadRandomQuestion(event, questionType, questions) {
    event.preventDefault();
    // Check if question type is in data
    if (questionType in questions) {
      const questionsOfType = questions[questionType];

      // Check if all questions have been asked
      if (askedQuestions.length === questionsOfType.length) {
        currentQuestion = null;
        showCurrentQuestion('All questions have been asked, change type or refresh.');
        return;
      }
      // If all questions have not been asked, reshuffle the questions if needed
      if (askedQuestions.length === 0 || questionIndex === 0) {
        shuffledQuestions = shuffleArray(questionsOfType);
      }
      // Get the next question from the shuffled array
      currentQuestion = shuffledQuestions[questionIndex];
      questionIndex = (questionIndex + 1) % shuffledQuestions.length;
      askedQuestions.push(currentQuestion);
      showCurrentQuestion(currentQuestion.question);
    } else {
      showCurrentQuestion('No questions available for the selected type.');
    }
  }

  function showCurrentQuestion(questionText) {
    // Store selectors for question and answer-btn elements
    const questionElement = document.querySelector('#question');
    const answerBtn = document.getElementById('answer-btn');

    // Verify that question has been picked and show text
    if (showingQuestion) {
      questionElement.innerHTML = questionText;
    } else {
      // Show answer if toggled, and create a UL and LI for each part of answer
      const answerList = currentQuestion.answer;
      let answerHtml = '<ul class="answer-list">';
      answerList.forEach(answer => {
        answerHtml += `<li><pre>${answer}</pre></li>`;
      });
      answerHtml += '</ul>';
      questionElement.innerHTML = answerHtml;
    }
    // Text for question/answer swap button
    answerBtn.textContent = showingQuestion ? 'Show Answer' : 'Show Question';
    answerBtn.style.display = 'block';
  }

  document.getElementById('answer-btn').addEventListener('click', toggleQuestionAnswer);

  function toggleQuestionAnswer() {
    // Toggle question and answer
    showingQuestion = !showingQuestion;
    if (currentQuestion) {
      showCurrentQuestion(showingQuestion ? currentQuestion.question : currentQuestion.answer);
    }
  }
})();

// Shuffle array using the Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

