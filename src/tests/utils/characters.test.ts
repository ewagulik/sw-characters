import { characters } from '../../fixtures/characters';
import {
  filterTall,
  filterCharactersByName,
  removeExtremes,
  sumCharHeight,
} from '../../utils';

describe('filtering only tall characters', () => {
  const tallCharacters = [
    { name: 'Luke Skywalker', height: 172 },
    { name: 'C-3PO', height: 167 },
  ];

  it('filters tall characters given delimiter', () => {
    expect(filterTall(characters)).toEqual(tallCharacters);
  });
});

test('filtering characters by name', () => {
  expect(filterCharactersByName(characters, 'l')).toEqual([
    { name: 'Luke Skywalker', height: 172 },
  ]);
});

test('extremes removal', () => {
  expect(removeExtremes(characters)).toEqual([
    { name: 'R5-D4', height: 97 },
    { name: 'C-3PO', height: 167 },
  ]);
});

test('character height sum', () => {
  expect(sumCharHeight(characters)).toBe(532);
});
