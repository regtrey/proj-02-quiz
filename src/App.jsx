import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AnswerProvider } from './context/AnswerContext';
import { QuestionProvider } from './context/QuestionContext';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import Error from './ui/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <QuestionProvider>
          <AnswerProvider>
            <GlobalStyles />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate to="quiz" replace />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="results" element={<Result />} />
              </Route>
              <Route path="page-not-found" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AnswerProvider>
        </QuestionProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
