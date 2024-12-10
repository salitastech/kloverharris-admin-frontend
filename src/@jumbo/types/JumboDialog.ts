interface ShowDialogProps {
  variant?: 'default' | 'confirm';
  content?: React.ReactNode;
  title?: React.ReactNode;
}

interface DialogState {
  open: boolean;
  title?: string;
  [key: string]: any; // Additional dynamic props
}

interface JumboDialogContextProps extends DialogState {
  showDialog: (props: any) => void;
  hideDialog: () => void;
}

export { type DialogState, type JumboDialogContextProps, type ShowDialogProps };
