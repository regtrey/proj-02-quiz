import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useQuestion } from '../context/QuestionContext';
import Error from './Error';

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-rows: max-content 1fr 8rem;
`;

function AppLayout() {
  const { hasError } = useQuestion();

  if (hasError) return <Error />;

  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
