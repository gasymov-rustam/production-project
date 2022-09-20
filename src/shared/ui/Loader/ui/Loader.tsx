import { FC } from 'react';
import { classNames } from '../../../lib';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames({ cls: 'lds-ellipsis', additional: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
