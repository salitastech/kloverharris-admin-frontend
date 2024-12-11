'use client';
import { Icon } from '@jumbo/components/Icon';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import { generalInfo } from '../../data';

const GeneralInfo = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'}>You Have</Typography>
      <List>
        {generalInfo.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                px: 0,
                py: 0.25,
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Icon name={item.icon} sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText primary={<Typography>{item.title}</Typography>} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export { GeneralInfo };
