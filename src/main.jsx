import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';

import PageNotFound from './ui/PageNotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={<PageNotFound />}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
