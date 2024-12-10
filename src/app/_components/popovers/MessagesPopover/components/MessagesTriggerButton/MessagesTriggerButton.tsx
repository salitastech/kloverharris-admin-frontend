import { JumboIconButton } from '@jumbo/components';
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { ThemeProvider } from '@mui/material';

const MessagesTriggerButton = () => {
  const { headerTheme } = useJumboHeaderTheme();
  return (
    <ThemeProvider theme={headerTheme}>
      <JumboIconButton badge={{ variant: 'dot' }} elevation={23}>
        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '1rem' }} />
      </JumboIconButton>
    </ThemeProvider>
  );
};

export { MessagesTriggerButton };
