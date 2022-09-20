import { FC } from 'react';
import { classNames, Loader } from '../../../shared';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames({ cls: cls.PageLoader, additional: [className] })}>
    <Loader />
  </div>
);
