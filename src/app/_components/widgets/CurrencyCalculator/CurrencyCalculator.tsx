'use client';
import { JumboCard } from '@jumbo/components';
import {
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { currencies, currencyRates } from './data';

const CurrencyCalculator = ({ title }: { title: React.ReactNode }) => {
  const [fromCurrency, setFromCurrency] = React.useState(currencies[0]);
  const [toCurrency, setToCurrency] = React.useState(currencies[1]);
  const [conversionRate, setConversionRate] = React.useState<number>(
    currencyRates[`${fromCurrency}-${toCurrency}`]
  );
  const [amount, setAmount] = React.useState<number>(0);
  const [convertedValue, setConvertedValue] = React.useState(0);

  React.useEffect(() => {
    setConversionRate(currencyRates[`${fromCurrency.code}-${toCurrency.code}`]);
  }, [fromCurrency, toCurrency]);

  React.useEffect(() => {
    const convertedAmount = amount * conversionRate;
    setConvertedValue(convertedAmount);
  }, [conversionRate, amount]);

  const changeFromCurrency = (e: SelectChangeEvent) => {
    for (let count = 0; count < currencies.length; count++) {
      if (currencies[count].code === e.target.value)
        setFromCurrency(currencies[count]);
    }
  };
  const changeToCurrency = (e: SelectChangeEvent) => {
    for (let count = 0; count < currencies.length; count++) {
      if (currencies[count].code === e.target.value)
        setToCurrency(currencies[count]);
    }
  };
  return (
    <JumboCard
      title={title}
      subheader={'05:58 am | March 20, 2024'}
      contentWrapper={true}
    >
      <Typography
        variant={'h6'}
        color={'text.primary'}
      >{`${amount} ${fromCurrency.name} equals`}</Typography>
      <Typography
        component={'div'}
        variant={'h1'}
      >{`${convertedValue} ${toCurrency.name}`}</Typography>
      <Typography variant={'body1'} color={'text.secondary'} mb={4}>
        {`1 ${fromCurrency.name} @${conversionRate} ${toCurrency.name}`}
      </Typography>
      <Grid container spacing={2} mb={1}>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth>
            <InputLabel id='from'>From</InputLabel>
            <Select
              label={'USD'}
              defaultValue={'usd'}
              fullWidth
              onChange={changeFromCurrency}
            >
              {currencies.map((currency, key) => {
                return (
                  <MenuItem key={key} value={currency.code}>
                    {currency.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth>
            <InputLabel id='to'>To</InputLabel>
            <Select
              label={'INR'}
              defaultValue={'inr'}
              onChange={changeToCurrency}
            >
              {currencies.map((currency, key) => {
                return (
                  <MenuItem key={key} value={currency.code}>
                    {currency.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth>
            <TextField
              label='Amount'
              placeholder={'Amount'}
              value={amount}
              margin={'dense'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAmount(parseFloat(e.target.value))
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </JumboCard>
  );
};

export { CurrencyCalculator };
