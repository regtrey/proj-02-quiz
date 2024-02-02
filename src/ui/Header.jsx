import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-grey-200);
  padding: 0 10rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;

export const Logo = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  cursor: pointer;
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
    </StyledHeader>
  );
}

export default Header;
