import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '../../../app';
import { articleDetailsName, articleDetailsReducer } from '../../../entities/Article';
import { profileReducer } from '../../../entities/Profile';
import { loginReducer } from '../../../features';
import { addCommentFormName, addCommentFormReducer } from '../../../features/AddCommentForm';
import { ArticleDetailsCommentsReducer, articleDetailsCommentsName } from '../../../pages/ArticleDetailsPage';
import { articlesPageReducer } from '../../../pages/ArticlesPage';
import { ReducersList } from '../../lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  [articleDetailsName]: articleDetailsReducer,
  [articleDetailsCommentsName]: ArticleDetailsCommentsReducer,
  [addCommentFormName]: addCommentFormReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
