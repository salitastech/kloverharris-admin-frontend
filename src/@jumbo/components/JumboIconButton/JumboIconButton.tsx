import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';

type JumboIconButtonProps = IconButtonProps & {
  children: React.ReactNode;
  elevation: number;
  badge?: BadgeProps;
};

const JumboIconButton = ({
  children,
  elevation,
  badge,
  ...restProps
}: JumboIconButtonProps) => {
  return (
    <IconButton
      sx={{
        width: 40,
        height: 40,
        boxShadow: elevation,
        padding: 1.25,
      }}
      {...restProps}
    >
      {badge ? (
        <Badge
          variant={badge.variant}
          sx={{
            '& .MuiBadge-badge': {
              top: -5,
              right: -5,
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: 2,
              borderColor: 'common.white',
              backgroundColor: (theme) => theme.palette.warning.main,
            },
          }}
        >
          {children}
        </Badge>
      ) : (
        children
      )}
    </IconButton>
  );
};

export { JumboIconButton };
