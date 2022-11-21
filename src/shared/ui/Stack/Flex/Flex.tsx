import { ReactNode } from 'react';

import { Mods, classNames } from '../../../lib';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexGap = '0' | '4' | '8' | '16' | '32';
export type FlexWrap = 'wrap' | 'no-wrap' | 'wrap-reverse';

const wrapClasses: Record<FlexWrap, string> = {
  wrap: cls.flexWrap,
  'no-wrap': cls.flexNoWrap,
  'wrap-reverse': cls.flexWrapReverse,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
  'row-reverse': cls.directionRowReverse,
  'column-reverse': cls.directionColumnReverse,
};

const gapClasses: Record<FlexGap, string> = {
  0: cls.gap0,
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  maxHeight?: boolean;
  wrap?: FlexWrap;
}

export const Flex = (props: FlexProps) => {
  const {
    className = '',
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = 0,
    wrap = 'wrap',
    max,
    maxHeight,
  } = props;

  const additional = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    wrapClasses[wrap],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
    [cls.maxHeight]: maxHeight,
  };

  return <div className={classNames({ cls: cls.Flex, mods, additional })}>{children}</div>;
};
