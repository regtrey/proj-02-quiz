import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

const StyledPageNotFound = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 360px) {
    padding: 0 2rem;
    justify-content: center;
  }
`;

const ErrorSpan = styled.span`
  font-size: 25rem;
  font-weight: 500;
  letter-spacing: -10px;
  margin-bottom: -5rem;

  @media screen and (max-width: 850px) {
    font-size: 20rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 15rem;
    margin-bottom: -2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 12rem;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 360px) {
    gap: 1.5rem;
  }
`;

const ErrorMessage = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 850px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.75rem;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <ErrorSpan>404</ErrorSpan>
      <ErrorContainer>
        <ErrorMessage>Something went wrong! 🤒</ErrorMessage>
        <Button size="medium" onClick={() => navigate('/')}>
          Go back home
        </Button>
      </ErrorContainer>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
