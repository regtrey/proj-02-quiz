import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 15rem;
    font-size: 2rem;
    border-radius: 8px;
    padding: 1rem;

    @media screen and (max-width: 360px) {
      width: 12rem;
      font-size: 1.5rem;
    }
  `,
  medium: css`
    width: 30rem;
    font-size: 2rem;
    border-radius: 6px;
    padding: 1.6rem;

    @media screen and (min-width: 768px) and (max-width: 850px) {
      width: 40rem;
      font-size: 3rem;
    }

    @media screen and (max-width: 360px) {
      width: 60vw;
      padding: 1.4rem;
    }
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
  submit: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `,
  finish: css`
    width: 35.5rem;
    font-size: 2.5rem;
    border: 1px solid var(--color-brand-500);
    background-color: var(--color-grey-0);
    color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-500);
      color: var(--color-grey-0);
    }

    @media screen and (max-width: 850px) {
      width: 36rem;
    }

    @media screen and (max-width: 767px) {
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
