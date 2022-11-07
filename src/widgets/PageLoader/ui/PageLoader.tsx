import { memo } from 'react';

import { Loader, classNames } from '../../../shared';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className = '' }: PageLoaderProps) => (
  <div className={classNames({ cls: cls.PageLoader, additional: [className] })}>
    <Loader />
  </div>
));
