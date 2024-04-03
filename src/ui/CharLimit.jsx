import styled, { css } from 'styled-components';

const limitStyle = {
  max: css`
    color: red;
  `,
};

export const CharLimit = styled.span`
  position: absolute;
  top: 68px;
  right: 1rem;

  @media screen and (min-width: 768px) and (max-width: 850px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 360px) {
    top: 54px;
  }

  ${(props) => limitStyle[props.$limit]}
`;
