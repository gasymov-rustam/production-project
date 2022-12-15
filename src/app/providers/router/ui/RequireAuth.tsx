import { Fragment, ReactNode, createElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { UserRole, getUserAuthData, getUserRoles } from '../../../../entities';
import { routeCreator } from '../../../../shared/constants';

interface RequireAuthProps {
  children?: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole), [roles, userRoles]);
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={routeCreator.getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={routeCreator.getRouteForbidden()} state={{ from: location }} replace />;
  }

  return createElement(Fragment, null, children);
};
