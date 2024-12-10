'use client';
import React from 'react';
import JumboDialogContext from './JumboDialogContext';

const JumboDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialog, setDialog] = React.useState({ open: false });

  const showDialog = React.useCallback(
    (props: any) => {
      setDialog({ open: true, ...props });
    },
    [setDialog]
  );

  const hideDialog = React.useCallback(() => {
    setDialog((state) => ({ ...state, open: false }));
  }, [setDialog]);

  const dialogContextValue = React.useMemo(
    () => ({
      ...dialog,
      showDialog,
      hideDialog,
    }),
    [dialog, hideDialog, showDialog]
  );

  return (
    <JumboDialogContext.Provider value={dialogContextValue}>
      {children}
    </JumboDialogContext.Provider>
  );
};

export { JumboDialogProvider };
