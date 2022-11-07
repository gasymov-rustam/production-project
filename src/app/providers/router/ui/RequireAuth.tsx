import { Fragment, ReactNode, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '../../../../entities';
import { RoutePath } from '../../../../shared';

interface RequireAuthProps {
  children?: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return createElement(Fragment, null, children);
};
