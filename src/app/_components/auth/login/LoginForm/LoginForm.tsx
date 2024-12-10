import { Link } from '@app/_components/_core';
import OtpModal from '@app/_components/modals/otp-modal';
import { authUser } from '@app/_components/popovers/AuthUserPopover/data';
import { ACCESS_TOKEN_KEY } from '@app/_utilities/constants';
import { setCookie, signIn } from '@app/_utilities/helpers';
import {
  JumboCheckbox,
  JumboForm,
  JumboInput,
  JumboOutlinedInput,
} from '@jumbo/vendors/react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../../../../lib/recoil/store';
import { validationSchema } from '../validation';

const LoginForm = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const [authModal, setAuthModal] = useState<boolean>(false);
  const router = useRouter();
  const setState = useSetRecoilState(authState);

  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      const user = await signIn({
        email: data.email,
        password: data.password,
      });
      if (!user) {
        return enqueueSnackbar('An error occured. Please try again', {
          variant: 'error',
          preventDuplicate: true,
        });
      }
      if (user.is_2fa_enabled) {
        setAuthModal(true);
        return;
      }
      setState({ isLoggedIn: true, user: authUser });
      enqueueSnackbar('Login successful!', {
        variant: 'success',
        preventDuplicate: true,
      });
      router.push('/');
      router.refresh();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleOtpVerification = () => {
    setState({ isLoggedIn: true, user: authUser });
    setCookie(ACCESS_TOKEN_KEY, '234trgfef34wrstgeqf4qersf3rwef3rd');
    enqueueSnackbar('Login successful!', {
      variant: 'success',
      preventDuplicate: true,
    });
    router.push('/');
    router.refresh();
  };

  return (
    <>
      <JumboForm
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        onChange={() => {}}
      >
        <Stack spacing={3} mb={3}>
          <JumboInput
            fullWidth
            fieldName={'email'}
            label={'Email'}
            defaultValue='demo@example.com'
          />
          <JumboOutlinedInput
            fieldName={'password'}
            label={'Password'}
            type={values.showPassword ? 'text' : 'password'}
            margin='none'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ bgcolor: (theme) => theme.palette.background.paper }}
            defaultValue={'zab#723'}
          />

          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <JumboCheckbox
              fieldName='rememberMe'
              label={'Remember Me'}
              defaultChecked
            />
            <Typography textAlign={'right'} variant={'body1'}>
              <Link underline='none' href={'/auth/forgot-password'}>
                {'Forgot your password?'}
              </Link>
            </Typography>
          </Stack>
          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            size='large'
            loading={loading}
          >
            {'Login'}
          </LoadingButton>
        </Stack>
      </JumboForm>
      <OtpModal
        open={authModal}
        onClose={() => {
          setAuthModal(false);
        }}
        onSubmit={() => {
          setAuthModal(false);
          handleOtpVerification();
        }}
      />
    </>
  );
};

export { LoginForm };
