import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestion } from './QuestionContext';

const AnswerContext = createContext();

function AnswerProvider({ children }) {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const navigate = useNavigate();
  const { numQuestions, curPage, searchParams, setSearchParams } =
    useQuestion();

  const rate = (numCorrect / numQuestions) * 100;

  let grade;
  if (rate >= 80) grade = "🥳 Excellent! You've nailed the test";
  if (rate < 80 && rate >= 70) grade = '🤩 Keep it coming';
  if (rate < 70 && rate >= 50) grade = "😝 You're still fine";
  if (rate < 50) grade = "🤕 There's a lot of room for improvement";

  useEffect(
    function () {
      if (curPage > numQuestions) navigate(-1);
      if (curPage === numQuestions) setIsFinish(true);
      setHasAnswered(false);
    },
    [
      numQuestions,
      curPage,
      setHasAnswered,
      setIsFinish,
      navigate,
      searchParams,
      setSearchParams,
    ]
  );

  return (
    <AnswerContext.Provider
      value={{
        hasAnswered,
        setHasAnswered,
        isCorrect,
        setIsCorrect,
        isFinish,
        setIsFinish,
        score,
        setScore,
        numCorrect,
        setNumCorrect,
        rate,
        grade,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
}

function useAnswer() {
  const context = useContext(AnswerContext);
  if (context === 'undefined')
    throw new Error('Answer context was used outside of the provider');
  return context;
}

export { AnswerProvider, useAnswer };
