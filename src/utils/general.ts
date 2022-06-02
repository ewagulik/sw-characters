export const countAvarage = (sumFn: ([]) => number, data: any[]) =>
  sumFn(data) / data.length;

export const roundValue = (value: number, decimalPlaces: number) =>
  Math.round((value + Number.EPSILON) * Math.pow(10, decimalPlaces)) /
  Math.pow(10, decimalPlaces);
