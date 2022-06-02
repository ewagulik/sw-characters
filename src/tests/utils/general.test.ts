import { characters } from '../../fixtures/characters';
import { Characters } from '../../types/character';
import { countAvarage, roundValue } from '../../utils';

describe('rounding values', () => {
  it('correctly rounds value to 2 decimals', () => {
    expect(roundValue(1.005, 2)).toBe(1.01);
  });
  it('correctly rounds value to 5 decimals', () => {
    expect(roundValue(0.0027385, 5)).toBe(0.00274);
  });
});

const mockSum = (arr: number[]) =>
  arr.reduce((prevVal: number, currVal: number) => prevVal + currVal);

const mockSumForObj = (arr: Characters) =>
  arr.map(char => char.height).reduce((prevVal, nextVal) => prevVal + nextVal);

let numbersArray = [2, 4, 7, 12];

describe('counting avarage value', () => {
  it('correctly counts avarage for numbers array', () => {
    expect(countAvarage(mockSum, numbersArray)).toEqual(6.25);
  });
  it('correctly counts avarage for objects array', () => {
    expect(countAvarage(mockSumForObj, characters)).toEqual(133);
  });
});
