import { memo, useState } from 'react';

import { StartIcon } from '../../assets';
import { Mods, classNames } from '../../lib';
import { Icon } from '../Icon';

import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className = '', size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (stars: number) => () => {
    if (!isSelected) {
      onSelect?.(stars);
      setCurrentStarsCount(stars);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames({ cls: cls.StarRating, additional: [className] })}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StartIcon}
          key={starNumber}
          className={classNames({
            cls: cls.starIcon,
            mods: { [cls.hovered]: currentStarsCount >= starNumber, [cls.selected]: isSelected },
            additional: [cls.normal],
          })}
          width={size}
          height={size}
          onClick={onClick(starNumber)}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
        />
      ))}
    </div>
  );
});
