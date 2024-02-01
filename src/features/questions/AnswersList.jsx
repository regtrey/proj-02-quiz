import styled from 'styled-components';
import { useAnswer } from '../../context/AnswerContext';
import { useQuestion } from '../../context/QuestionContext';

import { Answer } from './Answer';

const StyledAnswersList = styled.ul`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
`;

function AnswersList() {
  const {
    hasAnswered,
    setHasAnswered,
    setIsCorrect,
    score,
    setScore,
    setNumCorrect,
  } = useAnswer();
  const { curQuestion } = useQuestion();

  const choices = curQuestion.choices;

  function handleAnswer(index) {
    if (index !== curQuestion.answer) setIsCorrect(false);
    if (index === curQuestion.answer) {
      setIsCorrect(true);
      setScore((score) => score + curQuestion.points);
      setNumCorrect((num) => num + 1);
    }
    setHasAnswered(true);
  }

  return (
    <StyledAnswersList>
      {choices.map((choice, index) => (
        <Answer
          $hasAnswered={hasAnswered ? 'true' : 'false'}
          $answer={
            hasAnswered
              ? index === curQuestion.answer
                ? 'correct'
                : 'incorrect'
              : 'none'
          }
          key={choice}
          onClick={() => handleAnswer(index)}
        >
          {choice}
        </Answer>
      ))}
    </StyledAnswersList>
  );
}

export default AnswersList;
