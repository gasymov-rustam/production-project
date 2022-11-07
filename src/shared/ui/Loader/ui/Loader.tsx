import { memo } from 'react';

import { classNames } from '../../../lib';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className = '' }: LoaderProps) => (
  <div className={classNames({ cls: 'lds-ellipsis', additional: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
));
