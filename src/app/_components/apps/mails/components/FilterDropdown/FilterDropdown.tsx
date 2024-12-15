'use client';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { filtersOptions } from '../../fake-data';

const FilterDropdown = () => {
  const router = useRouter();
  const [filter, setFilter] = React.useState('');
  return (
    <FormControl size='small' sx={{ width: 120 }}>
      <InputLabel>Filter</InputLabel>
      <Select
        value={filter}
        label='Filter'
        onChange={(event) => setFilter(event.target.value)}
      >
        <MenuItem value=''>
          <em>Select Filter</em>
        </MenuItem>
        {filtersOptions.map((item, index) => (
          <MenuItem
            value={item.name}
            key={index}
            onClick={() => {
              router.push(`/apps/mail/${item.slug}`);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { FilterDropdown };
