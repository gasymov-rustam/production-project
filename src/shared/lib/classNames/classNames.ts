type Mods = Record<string, boolean | string>;

interface IClassNames {
  cls: string;
  mods?: Mods;
  additional?: string[];
}

export const classNames = ({ cls, mods = {}, additional = [] }: IClassNames): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(" ");
};
