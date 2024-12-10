import { CardProps, StackProps, SxProps, Theme } from '@mui/material';
import { JumboBackdropProps } from '.';

type JumboCardFeaturedProps = CardProps & {
  direction: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  separator?: boolean;
  separatorSx?: SxProps<Theme>;
  spacing?: number;
  fitToWidth?: boolean;
  bgcolor?: string[];
  backdrop?: JumboBackdropProps;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  contentWrapperProps?: StackProps;
  image?: React.ReactNode;
  imageWrapperSx?: SxProps<Theme>;
};

export { type JumboCardFeaturedProps };
