'use client';
import { Span } from '@jumbo/shared';
import { SxProps, Theme } from '@mui/material';
import Popover from '@mui/material/Popover';
import React from 'react';

type JumboDdPopoverProps = {
  children: React.ReactNode;
  triggerButton: React.ReactNode;
  sx?: SxProps<Theme>;
};

const JumboDdPopover = ({
  triggerButton,
  children,
  sx,
}: JumboDdPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isOpen = Boolean(anchorEl);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Span onClick={handleClick} sx={sx}>
        {triggerButton}
      </Span>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          mt: 2,
          mr: 6,
        }}
      >
        {children}
      </Popover>
    </>
  );
};

export { JumboDdPopover };
