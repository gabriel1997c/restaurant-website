import { Box, Grid, Typography } from '@mui/material';
import CustomerSaysCard from 'components/CustomerSaysCard';
import { customerTestimonials } from 'data';

import { styles } from './styles';

const CustomersSay = () => {
  return (
    <Box sx={styles.customersSay} component="section" pb={4}>
      <Typography variant="h3" py={3}>
        Our customers' reviews:
      </Typography>
      <Grid container spacing={2} padding={2}>
        {customerTestimonials.map((customer, index) => (
          <Grid item key={index} xs={12} md={6} lg={3}>
            <CustomerSaysCard customer={customer} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomersSay;
