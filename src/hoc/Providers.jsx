import { AnswerProvider } from '../context/AnswerContext';
import { AppInfoProvider } from '../context/AppInfoContext';
import { QuestionProvider } from '../context/QuestionContext';

function Providers({ children }) {
  return (
    <AppInfoProvider>
      <QuestionProvider>
        <AnswerProvider>{children}</AnswerProvider>
      </QuestionProvider>
    </AppInfoProvider>
  );
}

export default Providers;
