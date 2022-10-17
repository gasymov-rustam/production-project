import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared';
import { PageLoader } from '../../../../widgets';

export const AppRouter = memo(() => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
));
