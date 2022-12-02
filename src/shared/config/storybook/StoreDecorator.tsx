import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '../../../app';
import { articleDetailsReducer } from '../../../entities/Article';
import { loginReducer } from '../../../features';
import { addCommentFormReducer } from '../../../features/AddCommentForm';
import { profileReducer } from '../../../features/EditableProfileCard';
import { scrollRestorationReducer } from '../../../features/ScrollRestoration';
import { articleDetailsPageReducer } from '../../../pages/ArticleDetailsPage/model/slices';
import { ReducersList } from '../../lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  scrollRestoration: scrollRestorationReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
