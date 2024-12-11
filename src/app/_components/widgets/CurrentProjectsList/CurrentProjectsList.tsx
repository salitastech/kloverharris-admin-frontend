'use client';
import { JumboCard, JumboScrollbar } from '@jumbo/components';
import { Chip } from '@mui/material';
import { ProjectsList } from './components/ProjectsList';

interface CurrentProjectsProps {
  scrollHeight?:number,
  title:React.ReactNode;
  subheader:React.ReactNode;
}
const CurrentProjectsList = ({ title,subheader,scrollHeight }:CurrentProjectsProps) => {
  return (
    <JumboCard
      title={title}
      subheader={subheader}
      action={<Chip color={'warning'} label={'This week'} size={'small'} />}
      headerSx={{ borderBottom: 1, borderBottomColor: 'divider' }}
      contentWrapper
      contentSx={{ p: 0 }}
    >
      <JumboScrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 356}
      >
        <ProjectsList />
      </JumboScrollbar>
    </JumboCard>
  );
};

export { CurrentProjectsList };
