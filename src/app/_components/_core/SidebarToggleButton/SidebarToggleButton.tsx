import {
  useJumboLayout,
  useSidebarState,
} from '@jumbo/components/JumboLayout/hooks';
import { SIDEBAR_STYLES } from '@jumbo/utilities/constants';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';

function SidebarToggleButton() {
  const { isSidebarStyle, isSidebarOpen, isSidebarCollapsible } =
    useSidebarState();
  const { sidebarOptions, setSidebarOptions } = useJumboLayout();

  return (
    <>
      {isSidebarCollapsible() && (
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{
            ml: isSidebarStyle(SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) ? -2 : 0,
            mr: 3,
            boxShadow: 23,
          }}
          onClick={() => setSidebarOptions({ open: !sidebarOptions.open })}
        >
          {isSidebarOpen() ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      )}
    </>
  );
}

export { SidebarToggleButton };
