import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useAppInfo } from '../context/AppInfoContext';

import SpinnerWrapper from './SpinnerWrapper';
import PageNotFound from './PageNotFound';
import { useEffect } from 'react';

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-rows: max-content 1fr 8rem;
`;

function AppLayout() {
  const { isLoading, setIsLoading, hasError } = useAppInfo();

  useEffect(function () {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) return <SpinnerWrapper />;
  if (hasError) return <PageNotFound />;

  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
