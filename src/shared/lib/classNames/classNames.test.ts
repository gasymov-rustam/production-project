import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames({ cls: 'someClass' })).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames({ cls: 'someClass', additional: ['class1', 'class2'] })).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames({
        cls: 'someClass',
        mods: { hovered: true, scrollable: true },
        additional: ['class1', 'class2'],
      }),
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames({
        cls: 'someClass',
        mods: { hovered: true, scrollable: false },
        additional: ['class1', 'class2'],
      }),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames({
        cls: 'someClass',
        mods: { hovered: true, scrollable: undefined },
        additional: ['class1', 'class2'],
      }),
    ).toBe(expected);
  });
});
