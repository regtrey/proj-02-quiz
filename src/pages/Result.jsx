import styled from 'styled-components';
import MessageContainer from '../features/results/MessageContainer';
import ScoreContainer from '../features/results/ScoreContainer';

const StyledResult = styled.div`
  height: 100dvh;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;

  @media screen and (min-width: 1450px) {
    padding: 13rem 0;
  }

  @media screen and (max-width: 850px) {
    gap: 3rem;
  }

  @media screen and (max-width: 767px) {
    height: max-content;
    gap: 2rem;
  }

  @media screen and (max-width: 360px) {
    height: max-content;
    padding: 5rem 1rem;
    gap: 1rem;
  }
`;

function Result() {
  return (
    <StyledResult>
      <MessageContainer />
      <ScoreContainer />
    </StyledResult>
  );
}

export default Result;
