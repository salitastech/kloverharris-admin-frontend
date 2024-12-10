'use client';
import { JumboDdMenuProps, MenuItemProps } from '@jumbo/types';
import { MoreHorizOutlined } from '@mui/icons-material';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';

const JumboDdMenu = ({
  icon,
  menuItems,
  onClickCallback,
}: JumboDdMenuProps) => {
  const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(menuEl);

  const handleMenuItemClick = (option: MenuItemProps) => {
    setMenuEl(null);
    if (typeof onClickCallback === 'function') onClickCallback(option);
  };

  return (
    <>
      <IconButton
        sx={{
          color: 'inherit',
        }}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setMenuEl(event.currentTarget);
          event.stopPropagation();
        }}
      >
        {icon ? icon : <MoreHorizOutlined />}
      </IconButton>
      <Menu open={openMenu} anchorEl={menuEl} onClose={() => setMenuEl(null)}>
        {menuItems?.map((option, index) => (
          <MenuItem
            key={index}
            selected={option.title === 'Refresh'}
            onClick={(e) => {
              handleMenuItemClick(option);
              e.stopPropagation();
            }}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}

            <ListItemText>{option.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export { JumboDdMenu };
