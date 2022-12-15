import { UserRole } from '../../../../entities/User';
import {
  AboutPage,
  AdminPanelPage,
  ArticleDetailsPage,
  ArticleEditPage,
  ArticlesPage,
  ForbiddenPage,
  MainPage,
  NotFoundPage,
  ProfilePage,
} from '../../../../pages';
import type { AppRouterProps } from '../../../../shared';
import { AppRoutes, routeCreator } from '../../../../shared/constants';

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: {
    path: routeCreator.getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routeCreator.getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: routeCreator.getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: routeCreator.getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: routeCreator.getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: routeCreator.getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: routeCreator.getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: routeCreator.getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: routeCreator.getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routeCreator.getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
