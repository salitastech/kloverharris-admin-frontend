import { Div } from '@jumbo/shared';
import { Typography } from '@mui/material';

const Footer = async ({ lang }: { lang: string }) => {
  return (
    <Div
      sx={{
        py: 2,
        px: { lg: 6, xs: 4 },
        borderTop: 2,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant={'body1'} color={'text.primary'}>
          {`Copyright KloverHarris © ${new Date().getFullYear()}`}
        </Typography>
      </Div>
    </Div>
  );
};

export { Footer };
