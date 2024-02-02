import styled from 'styled-components';

import { Input } from './Input';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { useQuestion } from '../context/QuestionContext';
import { useEffect } from 'react';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

function Form() {
  const navigate = useNavigate();
  const { name, setName } = useQuestion();

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
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button size="large" disabled={!name}>
        Take Test
      </Button>
    </StyledForm>
  );
}

export default Form;
