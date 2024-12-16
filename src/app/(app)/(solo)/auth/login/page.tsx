'use client';
import { LoginForm } from '@app/_components/auth/login';
import { Div } from '@jumbo/shared';
import { Card, CardContent, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Div
      sx={{
        flex: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: (theme) => theme.spacing(4),
      }}
    >
      <Div sx={{ mb: 3, display: 'inline-flex' }}>KloverHarris Logo</Div>
      <Card sx={{ maxWidth: '100%', width: 360, mb: 4 }}>
        <Div sx={{ position: 'relative', height: '50px' }}>
          <Div
            sx={{
              flex: 1,
              inset: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              // backgroundColor: (theme) =>
              //   alpha(theme.palette.common.black, 0.5),
              p: (theme) => theme.spacing(3),
            }}
          >
            <Typography
              variant={'h2'}
              sx={{
                color: 'common.black',
                fontSize: '1.5rem',
                mb: 0,
                alignContent: 'center',
                alignSelf: 'center',
              }}
            >
              {'Sign In'}
            </Typography>
          </Div>
        </Div>
        <CardContent sx={{ pt: 5 }}>
          <LoginForm />
        </CardContent>
      </Card>
    </Div>
  );
};

export default LoginPage;
