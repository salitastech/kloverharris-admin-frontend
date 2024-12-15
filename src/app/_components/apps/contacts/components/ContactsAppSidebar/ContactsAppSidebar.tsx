'use client';
import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar, Button, Typography } from '@mui/material';
import React from 'react';
import { ContactForm, FoldersList, LabelsList } from './components';

const ContactsAppSidebar = () => {
  const { showDialog } = useJumboDialog();

  const showAddContactDialog = () => {
    showDialog({
      title: 'Add new contact',
      content: <ContactForm />,
    });
  };

  return (
    <React.Fragment>
      <Div
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Avatar
          sx={{ width: 60, height: 60, mr: 2 }}
          alt='Cory Smith'
          src={getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, '60x60')}
        />
        <Div sx={{ flex: '1 1 auto' }}>
          <Typography variant={'h5'} mb={0.35}>
            Cory Smith
          </Typography>
          <Typography variant={'body1'} color={'text.secondary'}>
            @royal.cory
          </Typography>
        </Div>
      </Div>
      <Button
        fullWidth
        disableElevation
        variant={'contained'}
        startIcon={<PersonAddIcon />}
        sx={{
          mb: 2,
          '& .MuiSvgIcon-root': {
            fontSize: '1.5rem',
          },
        }}
        onClick={showAddContactDialog}
      >
        Add Contact
      </Button>
      <FoldersList />
      <LabelsList />
    </React.Fragment>
  );
};
export { ContactsAppSidebar };
