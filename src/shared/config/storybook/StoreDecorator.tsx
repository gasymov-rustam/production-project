import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '../../../app';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
