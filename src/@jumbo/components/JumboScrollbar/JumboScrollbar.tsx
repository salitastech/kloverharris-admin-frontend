'use client';
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars-2';
import { useJumboTheme } from '../JumboTheme/hooks';

type JumboScrollbarProps = ScrollbarProps & {
  direction?: 'horizontal' | 'vertical';
  disable?: boolean;
};

function JumboScrollbar(props: JumboScrollbarProps) {
  const { theme } = useJumboTheme();
  const {
    direction,
    renderTrackVertical,
    renderTrackHorizontal,
    disable = false,
    children,
    ...restProps
  } = props;

  const scrollbarDirection = direction ?? 'vertical';
  const scrollbarDisable = disable ?? false;

  if (scrollbarDisable) {
    return children ?? null;
  }

  const renderTrackProp =
    scrollbarDirection === 'vertical'
      ? {
          renderTrackVertical: (props: any) => {
            return (
              <div
                style={{
                  ...props.style,
                  top: '2px',
                  bottom: '2px',
                  right: '2px',
                  borderRadius: '3px',
                  ...(theme.direction === 'rtl'
                    ? { right: 'auto', left: '2px' }
                    : {}),
                }}
                {...props}
              />
            );
          },
        }
      : {
          renderTrackHorizontal: (props: any) => {
            return (
              <div
                {...props}
                style={{
                  ...props.style,
                  left: '50%',
                  width: '100px',
                  top: 0,
                  transform: 'translateX(-50%)',
                }}
              />
            );
          },
        };

  return (
    <Scrollbars
      universal
      autoHide
      autoHideTimeout={2000}
      renderView={(props) => (
        <div
          {...props}
          style={
            theme.direction === 'rtl'
              ? {
                  ...props?.style,
                  marginLeft: '-17px',
                  marginRight: 0,
                }
              : { ...props?.style }
          }
        />
      )}
      {...restProps}
    >
      {children}
    </Scrollbars>
  );
}

export { JumboScrollbar };
