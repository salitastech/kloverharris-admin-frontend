'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Chip } from '@mui/material';
import { ActivitiesList } from './components';

type RecentActivitiesProps = {
  scrollHeight?: number;
  title: React.ReactNode;
};

function RecentActivities({ title, scrollHeight }: RecentActivitiesProps) {
  return (
    <JumboCard
      title={title}
      action={<Chip color={'warning'} size={'small'} label={'Last 20 days'} />}
      contentWrapper={true}
      contentSx={{ px: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 278}
      >
        <ActivitiesList />
      </JumboScrollbar>
    </JumboCard>
  );
}

export { RecentActivities };
