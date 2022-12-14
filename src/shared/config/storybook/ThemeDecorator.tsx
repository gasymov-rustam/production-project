import { Story } from '@storybook/react';

import { ThemeProvider } from '../../../app';
import { Theme } from '../../constants';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
