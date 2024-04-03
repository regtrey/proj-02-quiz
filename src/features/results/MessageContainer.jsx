import styled from 'styled-components';

import { useQuestion } from '../../context/QuestionContext';
import { useAnswer } from '../../context/AnswerContext';

const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    width: 75vw;
  }

  @media screen and (max-width: 767px) {
    width: 85vw;
  }

  @media screen and (max-width: 360px) {
    width: 90vw;
    gap: 1rem;
  }
`;

const Message = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

const SubMessage = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.75rem;
  }
`;

function MessageContainer() {
  const { numQuestions } = useQuestion();
  const { numCorrect, rate, grade } = useAnswer();

  return (
    <StyledMessageContainer>
      <Message>{grade}</Message>
      <SubMessage>
        You&apos;ve managed to answer {numCorrect} / {numQuestions} ({rate}%)
        questions correctly!
      </SubMessage>
    </StyledMessageContainer>
  );
}

export default MessageContainer;
