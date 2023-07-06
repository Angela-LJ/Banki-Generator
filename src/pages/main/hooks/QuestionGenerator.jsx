import questionsAnswers from '../../../assets/data/questions';
import { useState } from 'react';

export function useQuestionGenerator() {
  const [askedQuestions, setAskedQuestions] = useState({selectedTypeValue: null, questions: []});
  const [currentQuestion, setCurrentQuestion] = useState('Select a category and press generate');

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
    const answer = questionsAnswers[selectedTypeValue][question];
  
    setAskedQuestions(prevState => ({
      selectedTypeValue: prevState.selectedTypeValue,
      questions: [...prevState.questions, question]
    }));
  
    setCurrentQuestion({ question, answer });
  };

  return { currentQuestion, generateQuestionType };
}