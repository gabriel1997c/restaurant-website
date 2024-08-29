import { Box, Typography } from '@mui/material';
import { BookingForm, PageLayout } from 'components';

import { styles } from './styles';

function BookingPage() {
  return (
    <>
      <PageLayout>
        <Box sx={styles.outerBox}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h1" color="primary" align="center">
              Book a table at our restaurant!
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 600 }}>
              <BookingForm />
            </Box>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
}

export default BookingPage;
