import List from '@mui/material/List';
import { tickets } from '../../data';
import { RecentTicketItem } from '../RecentTicketItem';

const RecentTicketsList = () => {
  return (
    <List disablePadding sx={{ mb: 1 }}>
      {tickets.map((item, index) => (
        <RecentTicketItem item={item} key={index} />
      ))}
    </List>
  );
};

export { RecentTicketsList };
