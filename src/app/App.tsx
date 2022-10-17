import { Suspense, useEffect } from 'react';
import { userActions } from '../entities';
import { classNames, useAppDispatch } from '../shared';
import { Navbar, Sidebar } from '../widgets';
import { AppRouter } from './providers';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
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
};
