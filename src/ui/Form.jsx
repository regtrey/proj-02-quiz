import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppInfo } from '../context/AppInfoContext';
import { useAnswer } from '../context/AnswerContext';

import { Input } from './Input';
import { Button } from './Button';
import { CharLimit } from './CharLimit';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: relative;
`;

const maxChars = 15;

function Form() {
  const navigate = useNavigate();
  const { name, setName, hasStarted, setHasStarted, setIsLoading } =
    useAppInfo();
  const { isFinish } = useAnswer();

  const chars = name.length;
  const isMaxed = chars > maxChars;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    setHasStarted(true);
    setIsLoading(true);

    if (hasStarted || isFinish) navigate(-1);
    navigate('/app/quiz');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {name && !hasStarted && (
        <CharLimit $limit={isMaxed ? 'max' : null}>
          {chars} / {maxChars}
        </CharLimit>
      )}

      {hasStarted || isFinish ? null : (
        <Input
          placeholder="Enter your name"
          value={name}
          $limit={isMaxed ? 'max' : null}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <Button size="large" disabled={!name || isMaxed}>
        {!hasStarted && 'Take Test'}
        {hasStarted && !isFinish && 'Go back'}
        {hasStarted && isFinish && 'Go back'}
      </Button>
    </StyledForm>
  );
}

export default Form;
