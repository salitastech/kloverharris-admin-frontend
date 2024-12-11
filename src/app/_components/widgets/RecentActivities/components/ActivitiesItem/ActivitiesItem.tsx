import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { ActivityItem } from '../../data';

type ActivitiesItemProps = {
  item: ActivityItem;
};

const ActivitiesItem = ({ item }: ActivitiesItemProps) => {
  const ItemComponent = item.icon;
  return (
    <TimelineItem
      sx={{
        '&::before': {
          display: 'none',
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot
          sx={{
            p: '6px',
            m: 0,
            bgcolor: item.color,
            color: 'white',
          }}
        >
          {<ItemComponent />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          p: (theme) => theme.spacing(0.5, 0),
          ml: 2.5,
        }}
      >
        <Typography variant='h5' mb={0.5}>
          {item.title}
        </Typography>
        <Typography variant={'h6'} color={'text.secondary'}>
          {item.subheader}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export { ActivitiesItem };
