'use client';
import { Div } from '@jumbo/shared';
import { CardHeader, SxProps, Theme, Typography } from '@mui/material';

interface ContentHeaderProps {
  avatar: React.ReactNode;
  title: React.ReactNode;
  subheader: React.ReactNode;
  body?: string;
  back?: React.ReactNode;
  action: React.ReactNode;
  children: React.ReactNode;
  tabs: React.ReactNode;
  elevation?: boolean;
  sx: SxProps<Theme>;
}
const ContentHeader = ({
  avatar,
  title,
  subheader,
  body,
  back,
  action,
  tabs,
  children,
  elevation,
  sx,
}: ContentHeaderProps) => {
  return (
    <Div sx={{ ...sx }}>
      {back && <Div sx={{ mb: 2 }}>{back}</Div>}
      <CardHeader
        sx={{ p: 0, mb: 4 }}
        avatar={avatar}
        title={title}
        subheader={subheader}
        action={children}
      />
      {body && (
        <Typography variant={'body1'} mb={2}>
          {body}
        </Typography>
      )}
      {(!!tabs || !!action) && (
        <Div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {tabs && <Div sx={{ flex: '1 1 auto' }}>{tabs}</Div>}
          {action && <Div sx={{ flex: '0 0 auto' }}>{action}</Div>}
        </Div>
      )}
      {elevation}
    </Div>
  );
};

export { ContentHeader };
