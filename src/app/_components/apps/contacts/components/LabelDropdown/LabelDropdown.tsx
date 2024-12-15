'use client';
import { labels } from '@app/_components/apps/contacts/fake-datas';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const LabelDropdown = () => {
  const router = useRouter();
  const [label, setLabel] = React.useState('');
  return (
    <React.Fragment>
      <FormControl sx={{ width: 120 }} size={'small'}>
        <InputLabel>Label</InputLabel>
        <Select
          value={label}
          label='Label'
          onChange={(event) => setLabel(event.target.value)}
        >
          <MenuItem value=''>
            <em>Select Label</em>
          </MenuItem>
          {labels?.map((label, index) => (
            <MenuItem
              key={index}
              value={label?.name}
              onClick={() => router.push(`/apps/contact/label/${label?.id}`)}
            >
              {label?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
export { LabelDropdown };
