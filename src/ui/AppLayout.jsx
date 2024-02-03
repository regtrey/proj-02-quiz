import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useAppInfo } from '../context/AppInfoContext';

import PageNotFound from './PageNotFound';

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-rows: max-content 1fr 8rem;
`;

function AppLayout() {
  const { hasError } = useAppInfo();

  if (hasError) return <PageNotFound />;

  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
