import { useState } from 'react';
import questionsAnswers from '../../../assets/data/questions';

export function useQuestionGenerator() {
  const [askedQuestions, setAskedQuestions] = useState({selectedTypeValue: null, questions: []});
  const [currentQuestion, setCurrentQuestion] = useState({});

  const generateQuestionType = (selectedTypeValue) => {
    const questionTypes = Object.keys(questionsAnswers);
    if (!questionTypes.includes(selectedTypeValue)) {
      setCurrentQuestion('Invalid question type');
      return;
    }
  
    if (askedQuestions.selectedTypeValue !== selectedTypeValue) {
      setAskedQuestions({ selectedTypeValue, questions: [] });
    }
  
    const questions = questionsAnswers[selectedTypeValue];
    const availableQuestions = questions.filter(
      question => !askedQuestions.questions.includes(question)
    );
  
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    const questionData = questionsAnswers[selectedTypeValue][question];
  
    setAskedQuestions(prevState => ({
      selectedTypeValue: prevState.selectedTypeValue,
      questions: [...prevState.questions, question]
    }));
  
    setCurrentQuestion(question, questionData);
  };

  return { currentQuestion, generateQuestionType };
}