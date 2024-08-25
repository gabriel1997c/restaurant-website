import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import chicagoChefsOneImage from 'images/chicago_chefs_1.jpg';
import chicagoChefsTwoImage from 'images/chicago_chefs_2.jpg';

import { styles } from './styles';

const Chicago: React.FC = () => {
  return (
    <Grid container component="section" sx={styles.outerContainer}>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.paragraphs}>
          <Typography variant="h1" pb={2} sx={styles.mainHeader}>
            Little Lemon
          </Typography>
          <Typography variant="h3" pb={2}>
            Chicago
          </Typography>
          <Typography variant="body1" pb={2}>
            Chef Marco
          </Typography>
          <Typography variant="body3" pb={2}>
            At Little Lemon, we bring vibrant Mediterranean flavors to Chicago. With a passion for
            fresh, authentic ingredients, our menu features dishes like lemon-infused seafood and
            savory stuffed grape leaves. Each creation celebrates the essence of Mediterranean
            cuisine, blending tradition with a touch of innovation. Join us for a taste of the
            Mediterranean right in the heart of the city.
          </Typography>
          <Typography variant="body1" pb={2} pt={2}>
            Chef Adrian
          </Typography>
          <Typography variant="body3">
            Welcome to Little Lemon, where Mediterranean tradition meets modern flair. My focus on
            fresh, seasonal ingredients shines in every dish, from aromatic lamb kebabs to crisp
            lemon-dressed salads. Partnering with Chef Marco, we've crafted a menu that brings the
            warmth and flavor of the Mediterranean to Chicago. Discover a unique dining experience
            with us.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <ImageList cols={1}>
              <ImageListItem sx={styles.bannerImage}>
                <img
                  src={chicagoChefsOneImage}
                  alt="Chefs Marco and Adrian"
                  style={{ borderRadius: '50px' }}
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item>
            <ImageList cols={1}>
              <ImageListItem sx={styles.bannerImage}>
                <img
                  src={chicagoChefsTwoImage}
                  alt="Chefs Marco and Adrian"
                  style={{ borderRadius: '50px' }}
                />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chicago;
