import { useMediaQuery } from '@mui/material';

function useSmallScreen(): boolean {
  return useMediaQuery('(max-width:620px)');
}
export { useSmallScreen };
