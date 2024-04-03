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

  @media screen and (max-width: 360px) {
    padding: 3rem 0;
  }
`;

const QuestionItem = styled.h2`
  width: 80vw;
  font-size: 3rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 2rem;
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
