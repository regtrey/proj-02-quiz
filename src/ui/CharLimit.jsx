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

  ${(props) => limitStyle[props.$limit]}
`;
