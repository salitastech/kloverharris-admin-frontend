import { SxProps, Theme } from '@mui/material';

type JumboBgStyleProps = {
  bgColor?: string | string[];
  bgImage?: string;
  bgGradientDir?: string;
};

type JumboHeaderProps = {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  headerSx?: SxProps<Theme>;
  reverse?: boolean;
};

export { type JumboBgStyleProps, type JumboHeaderProps };
