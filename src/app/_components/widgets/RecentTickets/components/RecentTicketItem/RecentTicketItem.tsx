import { Span } from '@jumbo/shared';
import {
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { TicketType } from '../../data';

type RecentTicketItemProps = {
  item: TicketType;
};

const RecentTicketItem = ({ item }: RecentTicketItemProps) => {
  return (
    <ListItemButton
      component={'li'}
      sx={{
        //p: (theme) => theme.spacing(1.25, 3),
        p: '12px 24px',
        transition: 'all 0.2s',

        '&:hover': {
          boxShadow: `rgba(0, 0, 0, 0.2) 0px 3px 10px 0px`,
          transform: 'translateY(-4px)',

          '& .MuiChip-animation': {
            width: 'auto',
            height: 22,
            fontSize: 12,
          },
        },
      }}
    >
      <ListItemAvatar sx={{ minWidth: 68 }}>
        <Avatar
          alt={item.user.name}
          src={item.user.profilePic}
          sx={{ width: '48px', height: '48px' }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant={'h5'} mb={0.5}>
            {item.title}
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Span sx={{ color: 'primary.main' }}>{item.user.name}</Span>{' '}
            {'created by'} {item.createdDate}
          </React.Fragment>
        }
      />
      <Chip
        size={'small'}
        label={item.priority.label}
        className={'MuiChip-animation'}
        color={item.priority.color}
        sx={{
          width: 8,
          height: 8,
          fontSize: 0,
          transition: 'all 0.2s',
        }}
      />
    </ListItemButton>
  );
};

export { RecentTicketItem };
