'use client';
import { JumboDialogContextProps } from '@jumbo/types';
import React from 'react';

const defaultContext: JumboDialogContextProps = {
  open: false,
  showDialog: () => {},
  hideDialog: () => {},
};
const JumboDialogContext =
  React.createContext<JumboDialogContextProps>(defaultContext);

export default JumboDialogContext;
