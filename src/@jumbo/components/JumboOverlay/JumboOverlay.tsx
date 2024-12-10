import { JumboBackdrop } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { getMarginStyle } from '@jumbo/utilities/helpers';
import { SxProps, Theme } from '@mui/material';

type JumboOverlayProps = {
  opacity?: number | string;
  margin?: number | string | (number | string)[];
  show?: boolean;
  color?: string | ((theme: Theme) => string);
  children: React.ReactNode;
  sx: SxProps<Theme>;
  hAlign?: string;
  vAlign?: string;
};

const JumboOverlay = ({
  opacity = 0.7,
  margin,
  show = true,
  color = '#000000',
  children,
  sx,
  hAlign,
  vAlign,
}: JumboOverlayProps) => {
  return (
    <Div
      sx={{
        ...getMarginStyle(margin),
        zIndex: 3,
        position: 'absolute',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: hAlign ? hAlign : 'stretch',
        justifyContent: vAlign ? vAlign : 'stretch',
        ...sx,
      }}
    >
      <JumboBackdrop color={color} opacity={opacity} open={show} />
      <Div sx={{ zIndex: 2, position: 'relative' }}>{children}</Div>
    </Div>
  );
};

export { JumboOverlay };
