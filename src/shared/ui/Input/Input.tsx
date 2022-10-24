import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames, Mods } from '../../lib';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (str: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly = false,
    ...otherProps
  } = props;
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLInputElement;
    setCaretPosition(target?.selectionStart ?? 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames({ cls: cls.InputWrapper, additional: [className] })}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}

      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          readOnly={readonly}
          className={classNames({ cls: cls.input, mods })}
          {...otherProps}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          onChange={onChangeHandler}
        />

        {isFocused && !readonly && (
          <span className={cls.caret} style={{ left: caretPosition * 9 }} />
        )}
      </div>
    </div>
  );
});
