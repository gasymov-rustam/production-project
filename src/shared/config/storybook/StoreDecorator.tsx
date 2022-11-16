import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '../../../app';
import { articleDetailsReducer } from '../../../entities/Article';
import { profileReducer } from '../../../entities/Profile';
import { loginReducer } from '../../../features';
import { addCommentFormReducer } from '../../../features/AddCommentForm';
import { scrollRestorationReducer } from '../../../features/ScrollRestoration';
import { articleDetailsPageReducer } from '../../../pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from '../../../pages/ArticlesPage';
import { ReducersList } from '../../lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  scrollRestoration: scrollRestorationReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
