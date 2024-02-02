import styled from 'styled-components';
import { useAnswer } from '../../context/AnswerContext';
import { useQuestion } from '../../context/QuestionContext';

const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.h1`
  font-size: 5rem;
  font-weight: 400;
`;

const SubMessage = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
`;

function MessageContainer() {
  const { numCorrect } = useAnswer();
  const { numQuestions } = useQuestion();

  return (
    <StyledMessageContainer>
      <Message>🥳 You are born out of EXCELLENCE 🎉</Message>
      <SubMessage>
        You&apos;ve managed to answer {numCorrect} / {numQuestions} questions
        correctly!
      </SubMessage>
    </StyledMessageContainer>
  );
}

export default MessageContainer;
