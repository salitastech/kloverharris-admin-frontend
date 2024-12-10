import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CardHeader, IconButton, Stack } from '@mui/material';

type MessagesHeaderProps = {
  settingMenuCallback: React.MouseEventHandler;
};
const MessagesHeader = ({ settingMenuCallback }: MessagesHeaderProps) => {
  return (
    <CardHeader
      title={'Messages'}
      subheader={'6 new messages'}
      action={
        <Stack direction='row' alignItems='center' sx={{ mr: 1 }}>
          <IconButton aria-label='compose'>
            <ModeEditIcon fontSize={'small'} />
          </IconButton>
          <IconButton aria-label='starred'>
            <StarBorderIcon fontSize={'small'} />
          </IconButton>
          <IconButton
            edge={'end'}
            aria-label='starred'
            onClick={settingMenuCallback}
          >
            <MoreHorizIcon fontSize={'small'} />
          </IconButton>
        </Stack>
      }
      sx={{
        '& .MuiCardHeader-action': {
          alignSelf: 'center',
        },
      }}
    />
  );
};

export { MessagesHeader };
