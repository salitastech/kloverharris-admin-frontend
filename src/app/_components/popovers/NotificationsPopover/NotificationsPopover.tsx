import { JumboDdPopover, JumboIconButton } from '@jumbo/components';
import {
  useJumboHeaderTheme,
  useJumboTheme,
} from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import {
  Button,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ThemeProvider,
} from '@mui/material';
import {
  NotificationBirthday,
  NotificationInvitation,
  NotificationPost,
  NotificationSharedPost,
} from './components';
import { NotificationsDataProps, notificationsData } from './components/data';

type NotificationTypeProps = {
  POSTING: React.ComponentType<{ item: NotificationsDataProps }>;
  SHARED_POST: React.ComponentType<{ item: NotificationsDataProps }>;
  INVITATION: React.ComponentType<{ item: NotificationsDataProps }>;
  BIRTHDAY: React.ComponentType<{ item: NotificationsDataProps }>;
};
const NotificationComponent: NotificationTypeProps = {
  POSTING: NotificationPost,
  SHARED_POST: NotificationSharedPost,
  INVITATION: NotificationInvitation,
  BIRTHDAY: NotificationBirthday,
};

const NotificationsPopover = () => {
  const { theme } = useJumboTheme();
  const { headerTheme } = useJumboHeaderTheme();
  return (
    <ThemeProvider theme={theme}>
      <JumboDdPopover
        triggerButton={
          <ThemeProvider theme={headerTheme}>
            <JumboIconButton badge={{ variant: 'dot' }} elevation={23}>
              <NotificationImportantOutlinedIcon sx={{ fontSize: '1.25rem' }} />
            </JumboIconButton>
          </ThemeProvider>
        }
        // disableInsideClick
      >
        <Div sx={{ width: 360, maxWidth: '100%' }}>
          <CardHeader
            title={'Notifications'}
            action={
              <IconButton sx={{ my: -1 }}>
                <MoreHorizIcon />
              </IconButton>
            }
          />
          <List disablePadding>
            {notificationsData?.map((item, index) => {
              const NotificationItem = NotificationComponent[item?.type];
              return NotificationItem ? (
                <NotificationItem key={index} item={item} />
              ) : null;
            })}
          </List>
          <Divider />
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              sx={{
                textTransform: 'none',
                fontWeight: 'normal',
                '&:hover': { bgcolor: 'transparent' },
              }}
              size={'small'}
              variant='text'
              endIcon={<ArrowForwardIcon />}
              disableRipple
            >
              View All
            </Button>
          </CardActions>
        </Div>
      </JumboDdPopover>
    </ThemeProvider>
  );
};

export { NotificationsPopover };
