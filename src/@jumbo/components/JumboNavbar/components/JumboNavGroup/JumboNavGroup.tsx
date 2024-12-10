
import { Icon } from '@jumbo/components/Icon';
import { Div } from '@jumbo/shared';
import { MenuItems, NavbarGroup } from '@jumbo/types';
import { getNavChildren } from '@jumbo/utilities/helpers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';

import React from 'react';
import { useJumboNavGroupSx, useJumboNavbar } from '../../hooks';
import { SubMenusCollapsible } from './components/SubMenusCollapsible';
import { SubMenusPopover } from './components/SubMenusPopover';

type JumboNavGroupProps = {
  item: NavbarGroup | undefined;
};

function JumboNavGroup({ item }: JumboNavGroupProps) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLLIElement | null>(null);
  const { miniAndClosed, groupBehaviour } = useJumboNavbar();

  const navGroupSx: SxProps<Theme> = useJumboNavGroupSx();

  const handlePopoverOpen = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handlePopoverClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  //TODO: this component depends on this useTranslations

  if (!item) return null;

  const subMenus: MenuItems = getNavChildren(item);

  function renderItem(navItem: NavbarGroup) {
    if (miniAndClosed) {
      if (!navItem.icon) return null;
      return (
        <ListItemIcon
          sx={{ minWidth: miniAndClosed ? 20 : 32, color: 'inherit' }}
        >
           <Icon name={navItem.icon} fontSize={'small'} />
        </ListItemIcon>
      );
    }

    return (
      <React.Fragment>
        <Div
          sx={{
            position: 'absolute',
            left: 5,
            display: 'inline-flex',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </Div>
        <ListItemIcon sx={{ color: 'inherit', minWidth: 32 }}>
          <Icon name={navItem.icon} fontSize={'small'} />
        </ListItemIcon>
        <ListItemText
          primary={navItem.label}
          sx={{
            m: 0,
            '& .MuiTypography-root': {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ListItemButton
        component={'li'}
        onClick={() => setOpen(!open)}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ ...navGroupSx }}
      >
        {renderItem(item)}
      </ListItemButton>
      {subMenus && groupBehaviour === 'collapsible' && (
        <SubMenusCollapsible
          items={subMenus}
          open={open}
          miniAndClosed={miniAndClosed}
        />
      )}
      {subMenus && groupBehaviour === 'popover' && (
        <SubMenusPopover
          items={subMenus}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          miniAndClosed={miniAndClosed}
        />
      )}
    </React.Fragment>
  );
}

export { JumboNavGroup };
