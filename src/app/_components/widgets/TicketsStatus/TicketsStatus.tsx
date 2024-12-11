'use client';
import { JumboCard } from '@jumbo/components';
import { TicketsStatusChart } from './components';

const TicketsStatus = ({title}:{title:React.ReactNode}) => {
  return (
    <JumboCard
      title={title}
      sx={{ textAlign: 'center' }}
      contentWrapper
      contentSx={{
        px: 3,
        pt: 2,
        '&:last-child': {
          pb: 6.5,
        },
      }}
    >
      <TicketsStatusChart />
    </JumboCard>
  );
};

export { TicketsStatus };
