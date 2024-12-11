'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { RecentTicketsList } from './components';

const RecentTickets = ({title}:{title:React.ReactNode}) => {
  return (
    <JumboCard
      title={title}
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar autoHeight autoHeightMin={284}>
        <RecentTicketsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { RecentTickets };
