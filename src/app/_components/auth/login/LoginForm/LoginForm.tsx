import { Link } from '@app/_components/_core';
import OtpModal from '@app/_components/modals/otp-modal';
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
import React, { useState } from 'react';

import { ACCESS_TOKEN_KEY } from '@app/_utilities/constants';
import { setCookie } from '@app/_utilities/helpers';
import { enqueueSnackbar } from 'notistack';
import {
  useFinalizeLoginMutation,
  useInitiateLoginMutation,
} from '../../../../../lib/redux/api';
import { validationSchema } from '../validation';

const LoginForm = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [values, setValues] = React.useState({
    email: 'admin@kloverharris.com',
    password: 'password',
    showPassword: false,
  });
  const [authModal, setAuthModal] = useState<boolean>(false);
  const router = useRouter();
  const [initiateLogin] = useInitiateLoginMutation();
  const [finalizeLogin, { isLoading: verifying }] = useFinalizeLoginMutation();

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      const res: any = await initiateLogin({
        email: data.email,
        password: data.password,
      }).unwrap();
      //Todo: remove
      console.log(res);
      setAuthModal(true);
      return;
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (two_factor_code: string) => {
    if (two_factor_code.trim().length !== 6)
      return enqueueSnackbar('Invalid otp!', {
        variant: 'error',
        preventDuplicate: true,
        autoHideDuration: 5000,
      });
    const res = await finalizeLogin({
      email: values.email,
      two_factor_code,
    }).unwrap();
    // Todo: api and set state on successful response
    console.log({ res });
    if (res?.auth_token) {
      setCookie(ACCESS_TOKEN_KEY, res.auth_token);
      enqueueSnackbar('Login successful!', {
        variant: 'success',
        preventDuplicate: true,
        autoHideDuration: 5000,
      });
      setAuthModal(false);
      router.replace('/');
    }
    // router.refresh();
  };

  return (
    <>
      <JumboForm validationSchema={validationSchema} onSubmit={handleLogin}>
        <Stack spacing={3} mb={3}>
          <JumboInput
            fullWidth
            fieldName={'email'}
            label={'Email'}
            value={values.email}
            defaultValue={values.email}
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
            defaultValue={values.password}
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
        loading={verifying}
        open={authModal}
        onClose={() => {
          setAuthModal(false);
        }}
        onSubmit={handleOtpVerification}
      />
    </>
  );
};

export { LoginForm };
