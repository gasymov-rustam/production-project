import { RouteProps } from 'react-router-dom';

import { UserRole } from '../../entities';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
