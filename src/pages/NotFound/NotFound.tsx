import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography } from '@mui/material';
import { PageLayout } from 'components';

function NotFound() {
  return (
    <>
      <PageLayout>
        <Box pb={1} sx={{ textAlign: 'center', maxHeight: '50vh' }}>
          <Typography variant="h1">Page Not Found</Typography>
          <ErrorOutlineIcon sx={{ fontSize: 150, color: 'error.main', marginTop: '20px' }} />
        </Box>
      </PageLayout>
    </>
  );
}

export default NotFound;
