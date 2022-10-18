export type Mods = Record<string, boolean | string | undefined>;

interface IClassNames {
  cls?: string;
  mods?: Mods;
  additional?: string[];
}

export const classNames = ({ cls = '', mods = {}, additional = [] }: IClassNames): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ');
