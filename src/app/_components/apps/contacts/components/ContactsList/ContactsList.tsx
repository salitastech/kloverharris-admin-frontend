'use client';
import { Card, Collapse, List } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { contacts } from '../../fake-datas';
import { ContactGridItem, ContactHeader, ContactListItem } from './components';

const ContactsList = () => {
  const [view, setView] = React.useState<string>('list');

  const onView = (view: string) => {
    setView(view);
  };

  return (
    <Card
      sx={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ContactHeader view={view} onView={onView} />

      {view === 'list' ? (
        <List component={'div'} disablePadding>
          <TransitionGroup>
            {contacts.map((contact, index) => (
              <Collapse key={index}>
                <ContactListItem contact={contact} />
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ p: (theme) => theme.spacing(1, 3, 3) }}
        >
          {contacts.map((row, index) => (
            <ContactGridItem contact={row} key={index} />
          ))}
        </Grid>
      )}
    </Card>
  );
};

export { ContactsList };
