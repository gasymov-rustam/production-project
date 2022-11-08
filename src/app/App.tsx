import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited, userActions } from '../entities';
import { classNames, useAppDispatch } from '../shared';
import { Navbar, Sidebar } from '../widgets';

import { AppRouter } from './providers';

export const App = memo(() => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames({ cls: 'app' })}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
});
