import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { Divider, List } from '@mui/material';
import { SettingItem } from './SettingItem';

const SettingsList = () => {
  const [selectedSettings, setSelectedSettings] = React.useState<string[]>([
    'sound',
  ]);

  const handleToggle = (value: string) => {
    const newSettings = [...selectedSettings];
    const currentIndex = newSettings.indexOf(value);
    if (currentIndex === -1) {
      newSettings.push(value);
    } else {
      newSettings.splice(currentIndex, 1);
    }
    setSelectedSettings(newSettings);
  };

  return (
    <List disablePadding sx={{ pb: 1 }}>
      <SettingItem
        icon={<VolumeUpOutlinedIcon />}
        title={'Message sound'}
        onChangeCallback={handleToggle}
        value={'sound'}
        isChecked={selectedSettings.indexOf('sound') !== -1}
      />
      <SettingItem
        icon={<NotificationImportantOutlinedIcon />}
        title={'Popup new messages'}
        subheader={'Auto open new messages'}
        onChangeCallback={handleToggle}
        value={'allow-popup'}
        isChecked={selectedSettings.indexOf('allow-popup') !== -1}
      />
      <SettingItem
        icon={<PersonOutlinedIcon />}
        title={'Turn-off active status'}
        onChangeCallback={handleToggle}
        value={'show-active-status'}
        isChecked={selectedSettings.indexOf('show-active-status') !== -1}
      />
      <Divider component={'li'} sx={{ my: 1.5 }} />
      <SettingItem
        icon={<ChatBubbleOutlineOutlinedIcon />}
        title={'Message requests'}
      />
      <SettingItem
        icon={<SendOutlinedIcon />}
        title={'Message delivery setting'}
      />
    </List>
  );
};

export { SettingsList };
