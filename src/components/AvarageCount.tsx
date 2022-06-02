import React from 'react';
import { Characters } from '../types/character';
import {
  removeExtremes,
  sumCharHeight,
  countAvarage,
  roundValue,
} from '../utils';

export type CharactersProps = { characters: Characters };

const AvarageCount: React.FC<CharactersProps> = ({ characters }) => {
  const charactersToCompare =
    characters.length > 2 ? removeExtremes(characters) : characters;

  const avarage = countAvarage(sumCharHeight, charactersToCompare);

  return (
    <div>
      <span>Avg. height: </span>
      <span className='u-white'>{roundValue(avarage, 2)}</span>
    </div>
  );
};

export default React.memo(AvarageCount);
