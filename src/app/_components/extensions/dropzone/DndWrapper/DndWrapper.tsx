'use client';
import { Div } from '@jumbo/shared';
import { SxProps, Theme } from '@mui/material';
type DndType = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};
const DndWrapper = ({ children, sx }: DndType) => {
  return (
    <Div
      className='dropzone'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 1,
        mb: 3,
        padding: 8,
        minHeight: 120,
        borderRadius: 1,
        border: '2px dashed #BBB',
        bgcolor: (theme) => theme.palette.action.hover,
        ...sx,
      }}
    >
      {children}
    </Div>
  );
};

export { DndWrapper };
