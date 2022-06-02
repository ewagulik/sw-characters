import React from 'react';
import { Character } from '../types/character';

const Card: React.FC<Character> = ({ name, height }) => {
  return (
    <div className='card'>
      <div className='u-flex-1 u-flex-center card__top'>{height}</div>
      <div className='u-flex-center card__bottom'>{name}</div>
    </div>
  );
};

export default Card;
