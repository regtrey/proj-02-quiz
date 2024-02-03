import styled from 'styled-components';
import Spinner from './Spinner';

const StyledSpinnerWrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SpinnerWrapper() {
  return (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  );
}

export default SpinnerWrapper;
