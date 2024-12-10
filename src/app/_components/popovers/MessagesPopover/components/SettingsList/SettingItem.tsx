import React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

type SettingItemProps = {
  icon: React.ReactNode;
  title: string;
  subheader?: string;
  onChangeCallback?: (value: string) => void;
  isChecked?: boolean;
  value?: string;
};
const SettingItem = ({
  icon,
  title,
  subheader,
  onChangeCallback,
  isChecked,
  value,
}: SettingItemProps) => {
  return (
    <ListItemButton component={'li'} disableRipple>
      <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
      <ListItemText primary={title} secondary={subheader} />
      {onChangeCallback && typeof onChangeCallback === 'function' && (
        <Switch
          edge='end'
          onChange={() => onChangeCallback(value!)}
          checked={isChecked}
          size={'small'}
        />
      )}
    </ListItemButton>
  );
};

export { SettingItem };
