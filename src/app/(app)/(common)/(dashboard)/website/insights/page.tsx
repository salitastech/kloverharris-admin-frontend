import { getDictionary } from '@app/(app)/dictionaries';
import { View } from '@app/_components/_core';
import {
  ProjectItem,
  ProjectType,
  projects,
} from '@app/_components/views/grid/Projects';
import { users } from '@app/_components/views/grid/Users/data';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container, Typography, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Params = { lang: string };

export default async function InsightList({ params }: { params: Params }) {
  const { lang } = params;
  const { views } = await getDictionary(lang);

  return (
    users.length > 0 && (
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h2">{views.title.insights}</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add New Post
          </Button>
        </Box>
        <View<ProjectType>
          variant="grid"
          dataSource={projects}
          renderItem={ProjectItem}
        />
      </Container>
    )
  );
}
