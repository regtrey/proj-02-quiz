import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnswer } from '../context/AnswerContext';
import { useAppInfo } from '../context/AppInfoContext';

const StyledDetails = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 15rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  @media screen and (max-width: 360px) {
    width: 15rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
  }
`;

const Name = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const DetailsContainer = styled.div`
  width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 16rem;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }

  @media screen and (max-width: 360px) {
    width: 9rem;
    flex-direction: column;
    gap: 0;
  }
`;

const Detail = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function Details() {
  const navigate = useNavigate();
  const { name, time, setTime } = useAppInfo();
  const { score } = useAnswer();

  const minutes = time === 60 ? 1 : Math.floor(time / 60);
  const seconds = time % 60 === 0 ? 0 : time % 60;

  useEffect(
    function () {
      const timeLeft = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      if (time <= 0) {
        setTime(0);
        clearInterval(timeLeft);
        navigate('/app/results');
      }

      return () => {
        clearInterval(timeLeft);
      };
    },
    [time, setTime, navigate]
  );

  return (
    <StyledDetails>
      <Name>{name}</Name>
      <DetailsContainer>
        <Detail>
          Time: {time === 600 ? null : 0}
          {minutes}:
          {time % 60 === 0 || time === 60 || time % 60 <= 9
            ? 0
            : time >= 10
            ? null
            : 0}
          {seconds}
        </Detail>
        <Detail>Score: {score}</Detail>
      </DetailsContainer>
    </StyledDetails>
  );
}

export default Details;
