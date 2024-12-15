'use client';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Edit, Label } from '@mui/icons-material';
import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import React from 'react';
import { ComposeForm, LabelForm } from '../MailAppSidebar';

const MailFab = () => {
  const { showDialog } = useJumboDialog();

  const handleComposeForm = () => {
    showDialog({
      title: 'Compose Message',
      content: <ComposeForm />,
    });
  };

  const showAddLabelDialog = React.useCallback(() => {
    showDialog({
      title: 'Add New Label',
      content: <LabelForm />,
    });
  }, [showDialog]);

  return (
    <SpeedDial
      ariaLabel='mail-fab'
      icon={<SpeedDialIcon />}
      sx={{
        position: 'fixed',
        right: 30,
        bottom: 30,
      }}
    >
      <SpeedDialAction
        icon={
          <IconButton onClick={handleComposeForm}>
            <Edit />
          </IconButton>
        }
        tooltipTitle={'Compose Form'}
      />
      <SpeedDialAction
        icon={
          <IconButton onClick={showAddLabelDialog}>
            <Label />
          </IconButton>
        }
        tooltipTitle={'Add Label'}
      />
    </SpeedDial>
  );
};

export { MailFab };
