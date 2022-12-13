import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouterProps } from '../../../../shared';
import { PageLoader } from '../../../../widgets';
import { routeConfig } from '../config';

import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
