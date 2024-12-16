import { getDictionary } from '@app/(app)/dictionaries';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { FilesCounterCard } from '@app/_components/widgets/FilesCounterCard/FilesCounterCard';
import { Growth } from '@app/_components/widgets/Growth';
import { NewCustomers } from '@app/_components/widgets/NewCustomers';
import { ProjectCounterCard } from '@app/_components/widgets/ProjectCounterCard';
import { RecentActivities1 } from '@app/_components/widgets/RecentActivities1';
import { RecentTickets } from '@app/_components/widgets/RecentTickets';
import { RevenueHistory } from '@app/_components/widgets/RevenueHistory';
import { TasksCounterCard } from '@app/_components/widgets/TaskCounterCard';
import { TasksList2 } from '@app/_components/widgets/TasksList2';
import { TeamsCounterCard } from '@app/_components/widgets/TeamsCounterCard';
import { TicketsStatus } from '@app/_components/widgets/TicketsStatus';
import { WelcomeSummary } from '@app/_components/widgets/WelcomSummary';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Grid2 } from '@mui/material';

type Params = { lang: string };

export default async function Dashboard({ params }: { params: Params }) {
  const { lang } = params;
  const { widgets } = await getDictionary(lang);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: CONTAINER_MAX_WIDTH,
        display: 'flex',
        minWidth: 0,
        flex: 1,
        flexDirection: 'column',
      }}
      disableGutters
    >
      <Grid2 container spacing={3.5}>
        <Grid2 size={{ xs: 12 }}>
          <WelcomeSummary title={widgets.title.welcomeEMA} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <NewCustomers title={widgets.title.newCustomer} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <RevenueHistory title={widgets.title.revenueHistory} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <NewCustomers title={widgets.title.newEmployees} />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 3 }}>
          <Growth title={widgets.title.growth} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <ProjectCounterCard subheader={widgets.subheader.blogs} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TasksCounterCard subheader={widgets.subheader.publications} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TeamsCounterCard subheader={widgets.subheader.new_contacts} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <FilesCounterCard subheader={widgets.subheader.demo_bookings} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TasksList2 scrollHeight={373} title={widgets.title.taskList} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <CurrentProjectsList
            title={widgets.title.latestJobs}
            subheader={widgets.subheader.currentProjects}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7, lg: 8 }}>
          <RecentTickets title={widgets.title.recentTicket} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5, lg: 4 }}>
          <TicketsStatus title={widgets.title.ticketStatus} />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <RecentActivities1
            title={widgets.title.recentActivities}
            scrollHeight={306}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}
