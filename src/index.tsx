import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary, StoreProvider, ThemeProvider } from './app';
import { App } from './app/App';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
