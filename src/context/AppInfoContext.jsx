import { createContext, useContext, useState } from 'react';

const AppInfoContext = createContext();

const maxTime = 300;

function AppInfoProvider({ children }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState(maxTime);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <AppInfoContext.Provider
      value={{
        name,
        setName,
        time,
        setTime,
        maxTime,
        hasStarted,
        setHasStarted,
        isLoading,
        setIsLoading,
        isSubmitting,
        setIsSubmitting,
        hasError,
        setHasError,
      }}
    >
      {children}
    </AppInfoContext.Provider>
  );
}

function useAppInfo() {
  const context = useContext(AppInfoContext);
  if (context === 'undefined')
    throw new Error('AppInfo context was used outside of the provider');
  return context;
}

export { AppInfoProvider, useAppInfo };
