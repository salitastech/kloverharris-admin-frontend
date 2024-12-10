'use client';
import React from 'react';
import { DialogConfirm } from './components/DialogConfirm';
import { DialogDefault } from './components/DialogDefault';
import { useJumboDialog } from './hooks/useJumboDialog';

const dialogVariants: { [key: string]: React.ComponentType<any> } = {
  default: DialogDefault,
  confirm: DialogConfirm,
};

const JumboDialog = () => {
  const { variant, showDialog, hideDialog, ...restDialogProps } =
    useJumboDialog();
  const DialogVariant = variant
    ? dialogVariants[variant]
    : dialogVariants.default;

  return <DialogVariant {...restDialogProps} />;
};

export { JumboDialog };
