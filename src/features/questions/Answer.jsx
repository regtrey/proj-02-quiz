import styled, { css } from 'styled-components';

const answerStyle = {
  correct: css`
    background-color: var(--color-brand-500);
  `,
  incorrect: css`
    background-color: var(--color-danger-400);
  `,
  none: css`
    background-color: none;
  `,
};

const hoverStyle = {
  true: css`
    cursor: default;
  `,
  false: css`
    background-color: var(--color-brand-400);
    color: var(--color-grey-0);
  `,
};

export const Answer = styled.li`
  height: 8rem;
  font-size: 2.3rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
  padding: 0 4rem;
  line-height: 2.8rem;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;

  ${(props) => answerStyle[props.$answer]}

  &:hover {
    ${(props) => hoverStyle[props.$hasAnswered]}
  }

  @media screen and (max-width: 768px) {
    height: max-content;
    min-height: 6rem;
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;
