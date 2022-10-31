import { SVGProps, VFC } from 'react';
import { AboutIcon, ArticleIcon, MainIcon, ProfileIcon } from '../../../shared/assets';
import { RoutePath } from '../../../shared/config';

export interface SidebarItemType {
  path: string;
  text: string;
  namespace: string;
  Icon: VFC<SVGProps<SVGAElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    namespace: 'main',
    text: 'MAIN PAGE',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    namespace: 'about',
    text: 'ABOUT PAGE',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    namespace: 'profile',
    text: 'PROFILE PAGE',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    namespace: 'article',
    text: 'ARTICLES PAGE',
    authOnly: true,
  },
];
