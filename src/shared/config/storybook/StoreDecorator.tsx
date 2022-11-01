import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '../../../app';
import { loginReducer } from '../../../features';
import { profileReducer } from '../../../entities/Profile';
import { ReducersList } from '../../lib';
import { articleDetailsName, articleDetailsReducer } from '../../../entities/Article';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  [articleDetailsName]: articleDetailsReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
