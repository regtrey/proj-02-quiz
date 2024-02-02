import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 2rem;
    border-radius: 8px;
    padding: 1rem;
  `,
  medium: css`
    width: 30rem;
    font-size: 2rem;
    border-radius: 6px;
    padding: 1.6rem;
  `,
  large: css`
    width: 40rem;
    font-size: 2.2rem;
    border-radius: 6px;
    padding: 1.8rem;

    @media screen and (max-width: 768px) {
      width: 70vw;
    }
  `,
};

const type = {
  finish: css`
    width: 35.5rem;
    font-size: 2.5rem;
    background-color: var(--color-grey-0);
    color: var(--color-brand-500);
    border: 1px solid var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-500);
      color: var(--color-grey-0);
    }

    @media screen and (max-width: 768px) {
      width: 80vw;
    }
  `,
};

export const Button = styled.button`
  background-color: var(--color-brand-400);
  color: var(--color-grey-0);
  border: 1px solid var(--color-brand-500);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand-200);
    color: var(--color-brand-500);
  }

  ${(props) => sizes[props.size]}
  ${(props) => type[props.type]}
`;
