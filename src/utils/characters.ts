import { tallDelimiter } from '../consts';
import { Characters } from '../types/character';

export const filterTall = (data: Characters) =>
  data.filter(el => el.height > tallDelimiter);

export const filterCharactersByName = (
  charactersToFilter: Characters,
  filter: string,
) =>
  charactersToFilter.filter(char =>
    char.name.toLowerCase().includes(filter.toLowerCase()),
  );

export const removeExtremes = (characters: Characters) =>
  characters
    .sort((a, b) => a.height - b.height)
    .slice(1, characters.length - 1);

export const sumCharHeight = (characters: Characters) =>
  characters
    .map(char => char.height)
    .reduce((prevVal, currentValue) => prevVal + currentValue, 0);
