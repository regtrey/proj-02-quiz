import styled, { css } from 'styled-components';

const limitStyle = {
  max: css`
    border: 1px solid red;

    &:focus {
      outline: none;
    }
  `,
};

export const Input = styled.input`
  width: 40rem;
  font-size: 2.2rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 6px;
  padding: 1.8rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 70vw;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.75rem;
    padding: 1.4rem;
    margin-bottom: -0.5rem;
  }

  ${(props) => limitStyle[props.$limit]}
`;
