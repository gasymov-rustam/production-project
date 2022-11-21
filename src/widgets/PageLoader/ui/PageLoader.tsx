import { memo } from 'react';

import { HorizontalStack, Loader, classNames } from '../../../shared';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className = '' }: PageLoaderProps) => (
  <HorizontalStack justify="center" max className={classNames({ cls: cls.PageLoader, additional: [className] })}>
    <Loader />
  </HorizontalStack>
));
