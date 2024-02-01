import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-rows: max-content 1fr 8rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
