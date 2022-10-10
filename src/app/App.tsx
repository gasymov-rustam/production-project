import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../entities';
import { classNames } from '../shared';
import { Navbar, Sidebar } from '../widgets';
import { AppRouter } from './providers';

export const App = () => {
  const dispatch = useDispatch();

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
