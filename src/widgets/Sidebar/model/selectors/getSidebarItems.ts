import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '../../../../entities/User';
import { AboutIcon, ArticleIcon, MainIcon, ProfileIcon, RoutePath } from '../../../../shared';
import type { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItems.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
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
    );
  }

  return sidebarItems;
});
