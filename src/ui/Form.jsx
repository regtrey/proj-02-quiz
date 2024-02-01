import styled from 'styled-components';
import { useState } from 'react';

import { Input } from './Input';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

function Form() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    setName('');
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
