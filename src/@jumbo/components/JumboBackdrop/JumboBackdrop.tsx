import { Div } from '@jumbo/shared';
import { JumboBackdropProps } from '@jumbo/types';

function JumboBackdrop({
  color = '#000000',
  opacity = 0.7,
  open = true,
  sx = {},
  children,
}: JumboBackdropProps) {
  return open ? (
    <Div
      sx={{
        inset: 0,
        ...sx,
        position: 'absolute',
        bgcolor: color,
        opacity: opacity,
      }}
    >
      {children}
    </Div>
  ) : null;
}

export { JumboBackdrop };
