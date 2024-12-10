import { getDateElements } from '@app/_utilities/helpers';
import { Span } from '@jumbo/shared';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import {
  Avatar,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { NotificationsDataProps } from '../data';

const NotificationPost = ({ item }: { item: NotificationsDataProps }) => {
  return (
    <ListItemButton component={'li'} alignItems={'flex-start'}>
      <ListItemAvatar>
        <Avatar src={item.user.profile_pic} />
      </ListItemAvatar>
      <ListItemText>
        <Link underline={'none'} href='#/'>
          {item.user.name}
        </Link>{' '}
        has recently posted an album
        <Typography
          component='span'
          sx={{
            display: 'flex',
            fontSize: '90%',
            mt: 0.5,
          }}
        >
          <RateReviewOutlinedIcon fontSize='small' sx={{ color: '#836AFF' }} />
          <Span sx={{ color: 'text.secondary', ml: 1 }}>
            {getDateElements(item.date).time}
          </Span>
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};

export { NotificationPost };
