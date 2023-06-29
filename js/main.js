let currentQuestion = null;
let showingQuestion = true;
let askedQuestions = [];
const url = "js/questions.json"

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
    })
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
    if (questionType in data){
      const questionsOfType = data[questionType];
      // Verify that questionType exists
      if (questionsOfType && questionsOfType.length > 0) {
        // Filter out already asked questions
        const availableQuestions = questionsOfType.filter(question => !askedQuestions.includes(question));
        if (availableQuestions.length === 0) {
          showCurrentQuestion('All questions have been asked. Please reload the page.');
          return;
        }
        // Randomly generate a question based on question-type
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const randomQuestion = availableQuestions[randomIndex];
        if (randomQuestion) {
          // Store random question and mark it as asked
          currentQuestion = randomQuestion;
          askedQuestions.push(randomQuestion);
          showCurrentQuestion(currentQuestion.question);
        } else {
          showCurrentQuestion('No questions available for the selected type.');
        }
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