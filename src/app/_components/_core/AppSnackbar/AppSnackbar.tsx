'use client';
import { SnackbarProvider } from 'notistack';
import React from 'react';

const AppSnackbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={5000}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
};

export { AppSnackbar };
