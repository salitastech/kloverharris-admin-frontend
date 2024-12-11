import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { CardHeader, CardHeaderProps, Chip, Stack } from '@mui/material';
import React from 'react';

export type CardHeaderWithExtrasProps = CardHeaderProps & {
  count?: number | string;
  extras?: React.ReactNode;
  spacing?: number;
  divider?: boolean;
};

function CardHeaderWithExtras({
  title,
  subheader,
  action,
  count,
  extras,
  spacing = 3,
  ...restProps
}: CardHeaderWithExtrasProps) {
  const { theme } = useJumboTheme();
  return (
    <CardHeader
      title={
        <React.Fragment>
          {title}{' '}
          {count && <Chip size={'small'} label={count} color='primary' />}
        </React.Fragment>
      }
      subheader={subheader}
      action={
        <Stack spacing={spacing} direction={'row'} alignItems={'center'}>
          <Div>{extras}</Div>
          <Div style={{ marginBlock: '-6px' }}>{action}</Div>
        </Stack>
      }
      {...restProps}
    />
  );
}

export default CardHeaderWithExtras;
