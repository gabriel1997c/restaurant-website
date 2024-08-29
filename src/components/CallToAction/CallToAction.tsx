import { Box, Button, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { RESERVATIONS_URL } from 'constants';
import foodBanner from 'images/food_banner.jpg';

import { Link } from 'react-router-dom';

import { styles } from './styles';

const CallToAction: React.FC = () => {
  return (
    <Grid container component="section" sx={styles.hero}>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.banner}>
          <Typography variant="h1" pb={2} sx={styles.mainHeader}>
            Little Lemon
          </Typography>
          <Typography variant="h3" pb={2}>
            Chicago
          </Typography>
          <Typography variant="body2" pb={2}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          component={Link}
          to={RESERVATIONS_URL}
        >
          Reserve a Table
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.bannerImageBox}>
          <ImageList cols={1}>
            <ImageListItem>
              <img src={foodBanner} alt="Delicious food" style={{ borderRadius: '50px' }} />
            </ImageListItem>
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
