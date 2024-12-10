'use client';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Skeleton,
} from '@mui/material';
import React from 'react';

const dummyArray = [1, 2, 3];
const dummyArray1 = [1, 2, 3, 4, 5];

const SidebarSkeleton = () => {
  return (
    <List
      disablePadding
      sx={{
        mr: 2,
        pb: 2,
      }}
    >
      {dummyArray.map((index) => (
        <React.Fragment key={index}>
          <ListSubheader
            component='li'
            disableSticky
            sx={{
              backgroundColor: 'transparent',
              p: (theme) => theme.spacing(3, 0, 2),
            }}
          >
            <Skeleton width={80} height={18} />
          </ListSubheader>
          {dummyArray1.map((index) => (
            <ListItem sx={{ p: 0.25 }} key={index}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Skeleton variant='circular' width={25} height={25} />
              </ListItemIcon>
              <ListItemText primary={<Skeleton width={150} height={20} />} />
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};
export { SidebarSkeleton };
