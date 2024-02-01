import styled from 'styled-components';
import { Button } from '../ui/Button';
import { useAnswer } from '../context/AnswerContext';
import { useQuestion } from '../context/QuestionContext';
import { useNavigate } from 'react-router-dom';

const StyledResult = styled.div`
  height: 100dvh;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;

  @media (min-width: 1450px) {
    padding: 13rem 0;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.h1`
  font-size: 5rem;
  font-weight: 400;
`;

const SubMessage = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
`;

const ScoreContainer = styled.div`
  background-color: var(--color-brand-500);
  border-radius: 15px;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-grey-0);
`;

const Score = styled.h1`
  font-size: 15rem;
  font-weight: 700;
  color: var(--color-grey-0);
`;

function Result() {
  const navigate = useNavigate();
  const { setIsFinish, score, setScore, numCorrect, setNumCorrect } =
    useAnswer();
  const { numQuestions } = useQuestion();

  function handleFinish() {
    setIsFinish(false);
    setScore(0);
    setNumCorrect(0);
    navigate('/');
  }

  return (
    <StyledResult>
      <MessageContainer>
        <Message>🥳 You are born out of EXCELLENCE 🎉</Message>
        <SubMessage>
          You&apos;ve managed to answer {numCorrect} / {numQuestions} questions
          correctly!
        </SubMessage>
      </MessageContainer>

      <ScoreContainer>
        <Title>Score</Title>
        <Score>{score}</Score>
      </ScoreContainer>

      <Button size="large" type="finish" onClick={handleFinish}>
        Finish
      </Button>
    </StyledResult>
  );
}

export default Result;
