import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import PageNotFound from './ui/PageNotFound';
import Providers from './hoc/Providers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Providers>
          <GlobalStyles />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate to="quiz" replace />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="results" element={<Result />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Providers>
      </BrowserRouter>
    </>
  );
}

export default App;
