import { Box, SxProps, Theme } from '@mui/material';
const sxProps: SxProps<Theme> = {
  width: 500,
  bgcolor: 'red',
};
export default function Home() {
  return (
    <main>
      <Box>Sample Nextjs Starter Template!!</Box>
    </main>
  );
}
