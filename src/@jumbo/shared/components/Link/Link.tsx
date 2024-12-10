'use client';
import { useJumboConfig } from '@jumbo/components/JumboConfigProvider/hooks';
import { Link as MuiLink } from '@mui/material';
function Link(props: any) {
  const { LinkComponent } = useJumboConfig();

  return <MuiLink component={LinkComponent} {...props} />;
}

export { Link };
