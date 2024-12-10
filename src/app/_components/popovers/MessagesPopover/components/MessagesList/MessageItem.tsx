import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { MessagesDataProps } from './data';

type MessageItemProps = {
  item: MessagesDataProps;
};
const MessageItem = ({ item }: MessageItemProps) => {
  return (
    <ListItemButton component={'li'} disableRipple>
      <ListItemAvatar>
        <Avatar src={item.user.profile_pic} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant={'h6'} mb={0.25}>
            {item.user.name}
          </Typography>
        }
        secondary={
          <Typography noWrap color={'text.secondary'}>
            {item.message}
          </Typography>
        }
      />
      {/* todo : iconbutton prop elevation:1 */}
      <IconButton edge={'end'} size={'small'}>
        <MoreHorizIcon />
      </IconButton>
    </ListItemButton>
  );
};

export default MessageItem;
