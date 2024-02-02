import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAnswer } from '../../context/AnswerContext';

import { Button } from '../../ui/Button';

const StyledScoreContainer = styled.div`
  background-color: var(--color-brand-500);
  border-radius: 15px;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80vw;
    padding: 3rem 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-grey-0);

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Score = styled.h1`
  font-size: 15rem;
  font-weight: 700;
  color: var(--color-grey-0);

  @media screen and (max-width: 768px) {
    font-size: 8rem;
  }
`;

function ScoreContainer() {
  const navigate = useNavigate();
  const { setIsFinish, score, setScore, setNumCorrect } = useAnswer();

  function handleFinish() {
    setIsFinish(false);
    setScore(0);
    setNumCorrect(0);
    navigate('/');
  }

  return (
    <>
      <StyledScoreContainer>
        <Title>Score</Title>
        <Score>{score}</Score>
      </StyledScoreContainer>
      <Button size="large" type="finish" onClick={handleFinish}>
        Finish
      </Button>
    </>
  );
}

export default ScoreContainer;
