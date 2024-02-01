import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAnswer } from '../context/AnswerContext';
import { useQuestion } from '../context/QuestionContext';

import { Button } from './Button';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-grey-200);
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.p`
  font-size: 1.5rem;
`;

const CountSpan = styled.span`
  font-weight: 600;
`;

function Footer() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { hasAnswered, setHasAnswered, isFinish } = useAnswer();
  const { curPage, numQuestions } = useQuestion();

  function handleNext() {
    setHasAnswered(false);
    searchParams.set('question', curPage + 1);
    setSearchParams(searchParams);
  }

  function handleSubmit() {
    navigate('/app/results');
  }

  return (
    <StyledFooter>
      <Count>
        <CountSpan>{curPage}</CountSpan> of{' '}
        <CountSpan>{numQuestions}</CountSpan> Questions
      </Count>
      {isFinish ? (
        <Button
          size="small"
          onClick={handleSubmit}
          disabled={!hasAnswered || !isFinish}
        >
          Submit
        </Button>
      ) : (
        <Button
          size="small"
          onClick={handleNext}
          disabled={!hasAnswered || curPage + 1 > numQuestions}
        >
          Next Question
        </Button>
      )}
    </StyledFooter>
  );
}

export default Footer;
