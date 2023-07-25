import React, { createContext, useContext, useState } from "react";
import { useQuestionGenerator } from "./QuestionGenerator";

const CardTextContext = createContext();

export function useCardTextContext() {
  return useContext(CardTextContext);
}

export function CardTextContextProvider({ children }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [selectedTypeValue, setSelectedTypeValue] = useState("javascript");
  const { currentQuestion, generateQuestionType } = useQuestionGenerator();

  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue);
  };

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  const toggleExample = () => {
    setShowExample((prevShowExample) => !prevShowExample);
  }

  const handleGenerateQuestion = () => {
    generateQuestionType(selectedTypeValue);
    setShowAnswer(false);
  };

  const contextValue = {
    currentQuestion,
    showAnswer,
    setShowAnswer,
    selectedTypeValue,
    setSelectedTypeValue,
    handleGenerateQuestion,
    toggleAnswer,
    handleTypeSelection,
  }
  return (
    <CardTextContext.Provider
      value={contextValue}
    >
      {children}
    </CardTextContext.Provider>
  );
}
