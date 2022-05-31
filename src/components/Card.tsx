import React from 'react';
import { Character } from '../types';

const Card = ({ name, height }: Character) => {
  return (
    <div>
      <div>{name}</div>
      <div>{height}</div>
    </div>
  );
};

export default Card;
