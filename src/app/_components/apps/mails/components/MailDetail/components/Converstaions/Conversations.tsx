'use client';
import { Div } from '@jumbo/shared';
import { Button, TextField } from '@mui/material';
import React from 'react';

const Conversations = () => {
  const [message, setMessage] = React.useState('');
  return (
    <Div
      sx={{
        display: 'flex',
        minWidth: 0,
        alignItems: 'center',
      }}
    >
      <TextField
        placeholder={'Send a reply....'}
        size={'small'}
        sx={{ flex: 1 }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant={'contained'}
        sx={{ ml: 2 }}
        onClick={() => setMessage('')}
      >
        Send
      </Button>
    </Div>
  );
};

export { Conversations };
