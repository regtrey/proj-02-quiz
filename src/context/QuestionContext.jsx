import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { questions } from '../data/questions';

const QuestionContext = createContext();

const numQuestions = questions.length;

function QuestionProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);

  const curPage = Number(searchParams.get('question')) || 1;
  const curQuestion =
    curPage > numQuestions ? questions[0] : questions[curPage - 1];

  useEffect(
    function () {
      setHasError(false);
      if (!name || curPage > numQuestions) setHasError(true);
    },
    [name, curPage]
  );

  return (
    <QuestionContext.Provider
      value={{
        numQuestions,
        curPage,
        curQuestion,
        searchParams,
        setSearchParams,
        name,
        setName,
        hasError,
        setHasError,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === 'undefined')
    throw new Error('Question context was used outside of the provider');
  return context;
}

export { QuestionProvider, useQuestion };
