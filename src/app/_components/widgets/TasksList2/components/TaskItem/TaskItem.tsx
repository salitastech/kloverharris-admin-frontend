import { Div } from '@jumbo/shared/';
import { FiberManualRecord } from '@mui/icons-material';
import {
  alpha,
  Avatar,
  Checkbox,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { getTagById, TaskType } from '../../data';

const TaskItem = ({ item }: { item: TaskType }) => {
  const [isCompleted, setIsCompleted] = React.useState(item.completed);
  return (
    <ListItemButton
      disableRipple
      sx={{
        transition: 'all 0.2s',

        '&:hover': {
          boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
          transform: 'translateY(-4px)',

          '& .MuiTypography-description': {
            color: 'text.primary',
          },
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 48 }}>
        <Checkbox
          color={'secondary'}
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            className={'MuiTypography-description'}
            variant={'body1'}
            fontSize={15}
            color={'text.secondary'}
            sx={{ mr: 2 }}
          >
            {item.description}
          </Typography>
        }
      />
      <Div
        sx={{
          display: 'flex',
          alignItems: 'center',
          pr: 2,
          whiteSpace: 'nowrap',
        }}
      >
        {item?.tags.map((tagID, index) => {
          const tag = getTagById(tagID);
          if (!tag) return null;
          return (
            <Tooltip title={tag.name} key={index}>
              <FiberManualRecord color={tag.color} sx={{ fontSize: '14px' }} />
            </Tooltip>
          );
        })}
        <Avatar
          alt={item.user.name}
          src={item.user.profilePic}
          sx={{ ml: 2, width: '28px', height: '28px' }}
        />
        <Typography variant={'body1'} ml={1.5}>
          {item.dueDate}
        </Typography>
      </Div>
    </ListItemButton>
  );
};

export { TaskItem };
