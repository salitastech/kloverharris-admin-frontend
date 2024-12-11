export const currencies: any[] = [
  {
    name: 'USD',
    code: 'usd',
  },
  {
    name: 'INR',
    code: 'inr',
  },
  {
    name: 'EURO',
    code: 'euro',
  },
];

export const currencyRates: { [key: string]: number } = {
  'usd-inr': 83.5,
  'inr-usd': 0.012,
  'usd-euro': 0.92,
  'euro-usd': 1.09,
  'inr-euro': 0.011,
  'euro-inr': 90.72,
  'inr-inr': 1,
  'usd-usd': 1,
  'euro-euro': 1,
};
