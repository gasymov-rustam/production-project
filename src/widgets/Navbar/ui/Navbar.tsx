import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames({ cls: cls.Navbar, additional: [className] })} />
);
