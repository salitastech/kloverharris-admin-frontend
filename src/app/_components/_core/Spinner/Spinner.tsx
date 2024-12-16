import { Div } from '@jumbo/shared';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

const Spinner = ({ size = 40, margin = '-40px auto 0', flex = 1 }) => {
  return (
    <Div
      sx={{
        display: 'flex',
        minWidth: 0,
        alignItems: 'center',
        alignContent: 'center',
        flex: flex,
      }}
    >
      <CircularProgress sx={{ m: margin }} size={size} />
    </Div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  margin: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { Spinner };
