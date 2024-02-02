import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestion } from '../context/QuestionContext';

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
  const { name, setName } = useQuestion();

  const chars = name.length;
  const isMaxed = chars > maxChars;

  useEffect(
    function () {
      setName('');
    },
    [setName]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    navigate('/app/quiz');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CharLimit $limit={isMaxed ? 'max' : null}>
        {chars} / {maxChars}
      </CharLimit>

      <Input
        placeholder="Enter your name"
        value={name}
        $limit={isMaxed ? 'max' : null}
        onChange={(e) => setName(e.target.value)}
      />

      <Button size="large" disabled={!name || isMaxed}>
        Take Test
      </Button>
    </StyledForm>
  );
}

export default Form;
