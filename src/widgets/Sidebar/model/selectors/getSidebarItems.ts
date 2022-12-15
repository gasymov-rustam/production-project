import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '../../../../entities/User';
import { AboutIcon, ArticleIcon, MainIcon, ProfileIcon } from '../../../../shared';
import { routeCreator } from '../../../../shared/constants';
import type { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
    {
      path: routeCreator.getRouteMain(),
      Icon: MainIcon,
      namespace: 'main',
      text: 'MAIN PAGE',
    },
    {
      path: routeCreator.getRouteAbout(),
      Icon: AboutIcon,
      namespace: 'about',
      text: 'ABOUT PAGE',
    },
  ];

  if (userData) {
    sidebarItems.push(
      {
        path: routeCreator.getRouteProfile(userData.id),
        Icon: ProfileIcon,
        namespace: 'profile',
        text: 'PROFILE PAGE',
        authOnly: true,
      },
      {
        path: routeCreator.getRouteArticles(),
        Icon: ArticleIcon,
        namespace: 'article',
        text: 'ARTICLES PAGE',
        authOnly: true,
      },
    );
  }

  return sidebarItems;
});
