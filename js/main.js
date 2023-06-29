let currentQuestion = null;
let showingQuestion = true;
let askedQuestions = [];
let shuffledQuestions = [];
let questionIndex = 0;
const url = "js/questions.json";

document.addEventListener('DOMContentLoaded', function() {
  // Make sure DOM is fully loaded before use
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', loadRandomQuestion);
});

function reqData(callback) {
  // Fetch data from questions.json
  fetch(url)
    .then(res => res.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      // Show error if json file is not fetched
      console.error('Error fetching questions:', error);
    });
}

function loadRandomQuestion(event) {
  // Prevent default values after question has been shown
  event.preventDefault();
  reqData(function(data) {
    // Check for user input of question-type
    const selectedQuestionType = document.querySelector('input[name="question-type"]:checked');
    if (!selectedQuestionType) {
      showCurrentQuestion('Please select a question type.');
      return;
    }
    // Store value of user input
    const questionType = selectedQuestionType.value;
    if (questionType in data) {
      const questionsOfType = data[questionType];
      // Verify that questionType exists
      if (questionsOfType && questionsOfType.length > 0) {
        // Check if all questions of the current type have been asked
        if (askedQuestions.length === questionsOfType.length) {
          showCurrentQuestion('All questions have been asked.');
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
  });
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
    let answerHtml = '<ul>';
    answerList.forEach(answer => {
      answerHtml += `<li>${answer}</li>`;
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

// Shuffle array using the Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}