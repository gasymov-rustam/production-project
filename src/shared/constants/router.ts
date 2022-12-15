export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

const getRouteMain = () => '/';
const getRouteAbout = () => '/about';
const getRouteProfile = (id: string) => `/profile${id}`;
const getRouteArticles = () => '/articles';
const getRouteArticleDetails = (id: string) => `/articles${id}`;
const getRouteArticleCreate = () => '/articles/new';
const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
const getRouteAdmin = () => `/admin`;
const getRouteForbidden = () => `/forbidden`;
const getRouteNotFound = () => `/*`;

export const routeCreator = {
  getRouteMain,
  getRouteAbout,
  getRouteProfile,
  getRouteArticles,
  getRouteArticleDetails,
  getRouteArticleCreate,
  getRouteArticleEdit,
  getRouteAdmin,
  getRouteForbidden,
  getRouteNotFound,
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
