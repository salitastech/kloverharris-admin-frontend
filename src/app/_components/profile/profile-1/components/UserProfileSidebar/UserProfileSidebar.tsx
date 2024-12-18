import Grid from '@mui/material/Grid2';
import { Contacts } from '../Contact';
import { Friends } from '../Friends';
import { Photos } from '../Photos';

const UserProfileSidebar = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid size={{ xs: 12, md: 6, lg: 12 }}>
        <Contacts />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 12 }}>
        <Friends />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 12 }}>
        <Photos />
      </Grid>
    </Grid>
  );
};

export { UserProfileSidebar };
