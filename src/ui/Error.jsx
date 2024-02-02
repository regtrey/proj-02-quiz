import styled from 'styled-components';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const StyledError = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ErrorSpan = styled.span`
  font-size: 25rem;
  font-weight: 500;
  letter-spacing: -10px;
  margin-bottom: -5rem;

  @media screen and (max-width: 768px) {
    font-size: 15rem;
    margin-bottom: -2rem;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ErrorMessage = styled.h2`
  font-size: 5rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

function Error() {
  const navigate = useNavigate();

  return (
    <StyledError>
      <ErrorSpan>404</ErrorSpan>
      <ErrorContainer>
        <ErrorMessage>Something went wrong! 🤒</ErrorMessage>
        <Button size="medium" onClick={() => navigate('/')}>
          Go back home
        </Button>
      </ErrorContainer>
    </StyledError>
  );
}

export default Error;
