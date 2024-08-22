import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import foodBanner from 'images/food_banner.jpg';

import { styles } from './styles';

const CallToAction: React.FC = () => {
  return (
    <Grid container component="section" sx={styles.hero}>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.banner}>
          <Typography variant="h1" sx={styles.mainHeader}>
            Little Lemon
          </Typography>
          <Typography variant="h2">Chicago</Typography>
          <Typography variant="body2">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.bannerImageBox}>
          <ImageList cols={1} rowHeight={600}>
            <ImageListItem sx={styles.bannerImage}>
              <img src={foodBanner} alt="Delicious food" />
            </ImageListItem>
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
