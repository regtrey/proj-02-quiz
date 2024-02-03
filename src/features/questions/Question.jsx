import styled from 'styled-components';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuestion } from '../../context/QuestionContext';

import AnswersList from './AnswersList';

const StyledQuestionContainer = styled.main`
  height: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const QuestionItem = styled.h2`
  width: 80vw;
  font-size: 3.5rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

function Question() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { curQuestion, curPage } = useQuestion();

  const { id, question } = curQuestion;

  useEffect(function () {
    searchParams.set('question', curPage || 1);
    setSearchParams(searchParams);
  }, []);

  return (
    <StyledQuestionContainer>
      <QuestionItem>
        {id}. {question}
      </QuestionItem>
      <AnswersList />
    </StyledQuestionContainer>
  );
}

export default Question;
