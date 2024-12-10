import { Link as MuiLink } from '@mui/material';
import * as NextLink from 'next/link';

function Link(props: any) {
  return <MuiLink component={NextLink} {...props} />;
}

export { Link };
