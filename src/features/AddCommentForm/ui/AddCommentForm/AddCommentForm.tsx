import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  Button,
  ButtonTheme,
  DynamicModuleLoader,
  HorizontalStack,
  Input,
  ReducersList,
  classNames,
  useAppDispatch,
} from '../../../../shared';
import { addCommentFormActions, addCommentFormName, addCommentFormReducer, getAddCommentFormText } from '../../model';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  [addCommentFormName]: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className = '', onSendComment } = props;
  const { t } = useTranslation('article');
  const text = useSelector(getAddCommentFormText);
  // const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HorizontalStack
        justify="between"
        max
        className={classNames({ cls: cls.AddCommentForm, additional: [className] })}
      >
        <Input
          type="text"
          className={cls.input}
          placeholder={t('ENTER YOUR COMMENT')}
          value={text}
          onChange={onCommentTextChange}
        />

        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t('SEND')}
        </Button>
      </HorizontalStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
