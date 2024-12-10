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
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
};

export { AppSnackbar };
