import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ButtonTheme,
  Card,
  Drawer,
  HorizontalStack,
  Input,
  Modal,
  StarRating,
  Text,
  VerticalStack,
} from '../../../shared';

interface RatingProps {
  className?: string;
  title?: string;
  feedBackTitle?: string;
  rate?: number;
  hasFeedback?: boolean;
  onCancel?: (starsNumber: number) => void;
  onAccept?: (starsNumber: number, feedback?: string) => void;
}

export const Rating = memo((props: RatingProps) => {
  const { className = '', feedBackTitle, hasFeedback, onAccept, onCancel, title, rate = 0 } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const { t } = useTranslation();

  const onSelectSar = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const closeHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const modalContent = (
    <>
      <Text title={feedBackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('YOUR OPINION')} />
    </>
  );

  return (
    <Card className={className} fullWidth>
      <VerticalStack align="center" gap="8">
        <Text title={starsCount ? t('THANKS FOR THE ASSESSMENT') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectSar} />
      </VerticalStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VerticalStack max gap="32">
            {modalContent}

            <HorizontalStack justify="end" max gap="16">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={closeHandler}>
                {t('CLOSE')}
              </Button>

              <Button onClick={acceptHandler}>{t('SEND')}</Button>
            </HorizontalStack>
          </VerticalStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={closeHandler}>
          <VerticalStack gap="32">
            {modalContent}

            <Button fullWidth onClick={closeHandler}>
              {t('SEND')}
            </Button>

            <Button onClick={acceptHandler}>{t('SEND')}</Button>
          </VerticalStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
