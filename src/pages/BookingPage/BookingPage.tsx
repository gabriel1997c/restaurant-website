import { Box, Typography } from '@mui/material';
import { BookingForm, PageLayout } from 'components';

import { useState } from 'react';

import { styles } from './styles';

function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <PageLayout>
      <Box sx={styles.outerBox}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          {!isSubmitted && (
            <Typography variant="h1" color="primary" align="center">
              Book a table at our restaurant!
            </Typography>
          )}
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <BookingForm onSubmit={handleFormSubmit} />
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default BookingPage;
