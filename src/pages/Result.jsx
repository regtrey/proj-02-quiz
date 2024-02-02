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

  @media (min-width: 1450px) {
    padding: 13rem 0;
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
