import { SxProps, Theme } from '@mui/material';
export type JumboBackdropProps = {
  color?: string | ((theme: Theme) => string);
  opacity?: string | number;
  open?: boolean;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};
