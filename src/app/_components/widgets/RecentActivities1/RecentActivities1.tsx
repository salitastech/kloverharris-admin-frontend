'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { RecentActivitiesList } from './components';
interface RecentActivityProps {
  scrollHeight?:number;
  title:React.ReactNode;
}
const RecentActivities1 = ({ title,scrollHeight }:RecentActivityProps) => {
  return (
    <JumboCard
      title={title}
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 480}
      >
        <RecentActivitiesList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { RecentActivities1 };
