import { Suspense } from 'react';
import { classNames } from '../shared';
import { Navbar, Sidebar } from '../widgets';
import { AppRouter } from './providers';

export const App = () => (
  <div className={classNames({ cls: 'app' })}>
    <Suspense fallback=''>
      <Navbar />

      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
