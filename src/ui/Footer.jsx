import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAppInfo } from '../context/AppInfoContext';
import { useQuestion } from '../context/QuestionContext';
import { useAnswer } from '../context/AnswerContext';

import { Button } from './Button';
import MiniSpinner from './MiniSpinner';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-grey-200);
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 360px) {
    padding: 0 1rem;
  }
`;

const Count = styled.p`
  font-size: 1.5rem;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }
`;

const CountSpan = styled.span`
  font-weight: 600;
`;

function Footer() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { isSubmitting, setIsSubmitting } = useAppInfo();
  const { curPage, numQuestions } = useQuestion();
  const { hasAnswered, setHasAnswered, isFinish } = useAnswer();

  function handleNext() {
    setHasAnswered(false);
    searchParams.set('question', curPage + 1);
    setSearchParams(searchParams);
  }

  function handleSubmit() {
    setIsSubmitting(true);
    const submitTimeout = setTimeout(() => {
      setIsSubmitting(false);
      navigate('/app/results');
      clearTimeout(submitTimeout);
    }, 500);
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
          type="submit"
          onClick={handleSubmit}
          disabled={!hasAnswered || isSubmitting || !isFinish}
        >
          Submit {isSubmitting && <MiniSpinner />}
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
