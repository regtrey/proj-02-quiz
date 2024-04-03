import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Details from './Details';

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-grey-200);
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
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

export const Logo = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  cursor: pointer;

  @media screen and (max-width: 360px) {
    font-size: 4rem;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  color: var(--color-brand-400);
  letter-spacing: -4px;
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          test<Span>IT</Span>
        </Logo>
      </Link>
      <Details />
    </StyledHeader>
  );
}

export default Header;
