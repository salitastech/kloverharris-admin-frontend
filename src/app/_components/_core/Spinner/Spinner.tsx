import { Div } from '@jumbo/shared';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Div
      sx={{
        display: 'flex',
        minWidth: 0,
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
      }}
    >
      <CircularProgress sx={{ m: '-40px auto 0' }} />
    </Div>
  );
};

export { Spinner };
