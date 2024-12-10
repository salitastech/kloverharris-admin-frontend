import { getDateElements } from '@app/_utilities/helpers';
import { Span } from '@jumbo/shared';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import {
  Avatar,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { NotificationsDataProps } from '../data';

const NotificationBirthday = ({ item }: { item: NotificationsDataProps }) => {
  return (
    <ListItemButton component={'li'} alignItems={'flex-start'}>
      <ListItemAvatar>
        <Avatar src={item.user.profile_pic} />
      </ListItemAvatar>
      <ListItemText>
        <Link underline={'none'} href='#/'>
          {item.user.name}
        </Link>{' '}
        has birthday today.
        <Typography
          component='span'
          sx={{
            display: 'flex',
            fontSize: '90%',
            mt: 0.5,
          }}
        >
          {/* {notificationIcons[item.type]} */}
          <CakeOutlinedIcon fontSize='small' sx={{ color: '#EF933C' }} />
          <Span sx={{ color: 'text.secondary', ml: 1 }}>
            {getDateElements(item.date).time}
          </Span>
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};

export { NotificationBirthday };
