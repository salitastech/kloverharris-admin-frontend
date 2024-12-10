import List from '@mui/material/List';
import MessageItem from './MessageItem';
import { messagesData } from './data';

const MessagesList = () => {
  return (
    <List disablePadding>
      {messagesData?.map((item, index) => {
        return <MessageItem item={item} key={index}/>;
      })}
    </List>
  );
};

export { MessagesList };
