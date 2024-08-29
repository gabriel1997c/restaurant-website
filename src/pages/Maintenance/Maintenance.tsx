import ConstructionIcon from '@mui/icons-material/Construction';
import { Box, Typography } from '@mui/material';
import { PageLayout } from 'components';

function Maintenance() {
  return (
    <>
      <PageLayout>
        <Box pb={1} sx={{ textAlign: 'center', maxHeight: '50vh' }}>
          <Typography variant="h1">Page Under Maintenance</Typography>
          <ConstructionIcon sx={{ fontSize: 150, color: 'primary.main', marginTop: '20px' }} />
        </Box>
      </PageLayout>
    </>
  );
}

export default Maintenance;
