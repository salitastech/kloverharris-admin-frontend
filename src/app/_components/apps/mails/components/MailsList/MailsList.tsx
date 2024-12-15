'use client';
import { Card, Collapse, List } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { mails } from '../../fake-data';
import { MailHeader } from './components/MailHeader';
import { MailItem } from './components/MailItem';

const MailsList = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MailHeader />
      <List component={'div'} disablePadding>
        <TransitionGroup>
          {mails.map((item, index) => (
            <Collapse key={index}>
              <MailItem mailItem={item} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Card>
  );
};

export { MailsList };
