import { Div } from '@jumbo/shared';
import { LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { revenueList } from '../../data';

const RevenueProgress = () => {
  return (
    <Div sx={{ p: 3 }}>
      {revenueList.map((item, index) => (
        <React.Fragment key={index}>
          <Typography variant={'body1'} color={'text.secondary'}>
            {item.label}
          </Typography>
          <Div
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <LinearProgress
              variant={'determinate'}
              value={item.value}
              color={item.color}
              sx={{ height: 6, borderRadius: 5, flex: 1 }}
            />
            <Typography variant={'body1'} color={'text.secondary'} ml={1}>
              {`${item.value}%`}
            </Typography>
          </Div>
        </React.Fragment>
      ))}
    </Div>
  );
};

export { RevenueProgress };
