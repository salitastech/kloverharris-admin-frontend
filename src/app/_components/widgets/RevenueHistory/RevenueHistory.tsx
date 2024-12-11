'use client';
import { JumboCard } from '@jumbo/components';
import { ListItemText, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { RevenueChart } from './components';

const RevenueHistory = ({ title }: { title: React.ReactNode }) => {
  return (
    <JumboCard title={title} contentWrapper contentSx={{ px: 3, pt: 1 }}>
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 6 }}>
          <ListItemText
            primary={
              <Typography variant={'h3'} mb={0.5}>
                $216,759
              </Typography>
            }
            secondary={'YTD Revenue'}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <RevenueChart />
        </Grid>
      </Grid>
    </JumboCard>
  );
};
export { RevenueHistory };
