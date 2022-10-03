import { Suspense } from 'react';
import { classNames } from '../shared';
import { Navbar, Sidebar } from '../widgets';
import { AppRouter, useTheme } from './providers';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames({
        cls: 'app',
        additional: [theme],
      })}
    >
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
