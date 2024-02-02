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

  @media screen and (max-width: 768px) {
    padding: 10rem 2rem 7rem;
    gap: 2rem;
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
