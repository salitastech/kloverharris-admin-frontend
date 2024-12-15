'use client';
import { StyledMenu } from '@app/_components/_core';
import { filtersOptions } from '@app/_components/apps/mails/fake-data';
import { Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';
import { FilterItem } from './components';

const FiltersList = () => {
  const { folder } = useParams();
  return (
    <React.Fragment>
      <Typography
        variant={'h6'}
        color={'text.secondary'}
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '11px',
        }}
      >
        Filter
      </Typography>
      <StyledMenu sx={{ mb: 2 }}>
        {filtersOptions.map((filter, index) => (
          <FilterItem
            key={index}
            slug={filter.slug}
            name={filter.name}
            icon={filter.icon}
            selected={Array.isArray(folder) && filter.slug === folder[0]}
          />
        ))}
      </StyledMenu>
    </React.Fragment>
  );
};

export { FiltersList };
