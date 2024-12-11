'use client';
import { Div } from '@jumbo/shared';
import { LinearProgress, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';
import React from 'react';
import { siteAudiences } from '../../data';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  flex: 1,
}));

const SiteAudienceInfo = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'}>Site Audience</Typography>
      {siteAudiences.map((item, index) => (
        <React.Fragment key={index}>
          <Typography variant={'body1'} color={'text.secondary'}>
            {item.label}
          </Typography>
          <Div
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 0.5,
            }}
          >
            <StyledLinearProgress
              variant={'determinate'}
              value={item.value}
              color={item.color}
            />
            <Typography
              variant={'body1'}
              color={'text.secondary'}
              ml={1}
            >{`${item.value}%`}</Typography>
          </Div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export { SiteAudienceInfo };
