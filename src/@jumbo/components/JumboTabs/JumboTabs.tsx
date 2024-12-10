import { Button, Stack, SxProps, Theme } from '@mui/material';
import React from 'react';

export type JumboTabsProps = {
  items: any[];
  primaryKey?: string;
  labelKey?: string;
  defaultValue?: any;
  sx?: SxProps<Theme>;
  onChange?: (item: any) => any;
};

function JumboTabs({
  items,
  primaryKey = 'key',
  labelKey = 'label',
  defaultValue,
  sx,
  onChange = (item: any) => item,
}: JumboTabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const handleTabClick = React.useCallback(
    (item: any) => {
      setActiveTab(item);
      onChange(item);
    },
    [onChange]
  );

  return (
    <Stack direction={'row'} spacing={1} sx={sx}>
      {items.map((item, index) => {
        return (
          <Button
            key={index}
            size={'small'}
            variant={
              activeTab && item[primaryKey] === activeTab[primaryKey]
                ? 'contained'
                : 'outlined'
            }
            onClick={() => handleTabClick(item)}
          >
            {item[labelKey]}
          </Button>
        );
      })}
    </Stack>
  );
}

export { JumboTabs };
