import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import {
  Avatar,
  LinearProgress,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { CurrentProjectType, menuItems } from '../../data';

type ProjectItemProps = {
  data: CurrentProjectType;
};

const ProjectItem = ({ data }: ProjectItemProps) => {
  return (
    <React.Fragment>
      <ListItemButton
        component={'li'}
        sx={{
          p: (theme) => theme.spacing(1, 3),
          borderBottom: 1,
          borderBottomColor: 'divider',

          '&:last-child': {
            borderBottomColor: 'transparent',
          },
        }}
      >
        <ListItemAvatar>
          <Avatar alt={data.name} src={data.logo} />
        </ListItemAvatar>
        <ListItemText
          sx={{ width: '50%' }}
          primary={
            <Typography variant='h5' mb={0.5}>
              {data.name}
            </Typography>
          }
          secondary={
            <Typography
              variant={'body1'}
              fontSize={12}
              color={'text.secondary'}
            >
              {data.dueDate}
            </Typography>
          }
        />
        <ListItemText sx={{ width: '40%', px: 2 }}>
          <LinearProgress
            variant='determinate'
            color={'success'}
            value={data.progress}
          />
        </ListItemText>
        <ListItemText>
          <JumboDdMenu menuItems={menuItems} />
        </ListItemText>
      </ListItemButton>
    </React.Fragment>
  );
};
/* Todo project props */
export { ProjectItem };
