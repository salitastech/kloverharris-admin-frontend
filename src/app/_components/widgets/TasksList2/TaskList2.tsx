'use client';

import CardHeaderWithExtras from '@app/_components/_core/CardHeaderWithExtras/CardHeaderWithExtras';
import { JumboScrollbar, JumboTabs } from '@jumbo/components';
import { JumboDdMenu } from '@jumbo/components/JumboDdMenu';
import { Close, MoreHoriz } from '@mui/icons-material';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import { TaskItem } from './components';
import { tasks } from './data';

type FilterOptionType = {
  id: number;
};
type FilterTabType = {
  label: string;
  value: number;
};

const filterTabs: FilterTabType[] = [
  { label: 'All Tasks', value: 0 },
  { label: 'My Tasks', value: 100 },
];
interface TasksListProps {
  scrollHeight?: number;
  title: React.ReactNode;
}
const TasksList2 = ({ scrollHeight, title }: TasksListProps) => {
  const [filterOptions, setFilterOptions] = React.useState<FilterOptionType>({
    id: 0,
  });

  const handleTabChange = React.useCallback((item: FilterTabType) => {
    setFilterOptions({
      id: item.value,
    });
  }, []);

  const visibleTasks = tasks.filter((item) => {
    if (!filterOptions.id) return true;

    return item.user.id === filterOptions.id;
  });

  return (
    <Card>
      <CardHeaderWithExtras
        title={title}
        extras={
          <JumboTabs
            items={filterTabs}
            onChange={handleTabChange}
            primaryKey='value'
            labelKey='label'
            defaultValue={filterTabs[0]}
          />
        }
        action={
          <JumboDdMenu
            menuItems={[
              { icon: <MoreHoriz />, title: 'More Detail' },
              { icon: <Close />, title: 'Close' },
            ]}
          />
        }
        spacing={3}
        sx={{
          borderBottom: 1,
          borderBottomColor: 'divider',
        }}
      />
      <CardContent sx={{ p: 0 }}>
        <JumboScrollbar
          autoHeight
          autoHeightMin={scrollHeight ? scrollHeight : 392}
        >
          {visibleTasks.map((task) => (
            <TaskItem key={task.id} item={task} />
          ))}
        </JumboScrollbar>
      </CardContent>
    </Card>
  );
};

export { TasksList2 };
