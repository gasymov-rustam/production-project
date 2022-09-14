type Mods = Record<string, boolean | string>;

interface IClassNames {
  regularClassName: string;
  mods?: Mods;
  additional?: string[];
}

export const classNames = ({ regularClassName, mods, additional }: IClassNames): string => {
  const booleanClassNames = mods
    ? Object.entries(mods)
        .filter(([classNames, value]) => Boolean(value))
        .map(([classNames]) => classNames)
    : [""];

  const additionalClassNames = additional ? additional : [""];

  return [regularClassName, ...additionalClassNames, ...booleanClassNames].join(" ");
};
