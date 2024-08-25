import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import chicagoChefsOneImage from 'images/chicago_chefs_1.jpg';
import chicagoChefsTwoImage from 'images/chicago_chefs_2.jpg';

import { styles } from './styles';

const Chicago: React.FC = () => {
  return (
    <Grid container component="section" sx={styles.outerContainer}>
      <Grid item xs={12} sm={6}>
        <Box sx={styles.paragraphs}>
          <Typography variant="h1" pb={2} sx={styles.mainHeader}>Little Lemon</Typography>
          <Typography variant="h3" pb={2}>Chicago</Typography>
          <Typography variant="body1" pb={2}>Chef Marco</Typography>
          <Typography variant="body2" pb={2}>
            Welcome to Little Lemon! Our journey began with a simple idea: to bring fresh, vibrant
            flavors to every meal. With over a decade of experience in Mediterranean cuisine, I
            wanted to create dishes that highlight the natural zest of high-quality ingredients.
            From our lemon herb chicken to our signature lemon tart, every dish at Little Lemon is
            crafted with love and care. Join us and experience the sunshine in every bite.
          </Typography>
          <Typography variant="body1" pb={2}>Chef Adrian</Typography>
          <Typography variant="body2">
            At Little Lemon, we believe in the joy of cooking and sharing meals. My passion for
            culinary arts started in my family's kitchen, where I learned the value of tradition and
            authenticity. Together with Chef Marco, we've crafted a menu that celebrates the bright,
            citrusy notes of lemon, adding a refreshing twist to classic dishes. Our goal is to
            provide you with a dining experience that's both delicious and memorable. Welcome to our
            table!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <ImageList cols={1}>
              <ImageListItem sx={styles.bannerImage}>
                <img src={chicagoChefsOneImage} alt="Chefs Marco and Adrian" style={{borderRadius: "50px"}}/>
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item>
            <ImageList cols={1}>
              <ImageListItem sx={styles.bannerImage}>
                <img src={chicagoChefsTwoImage} alt="Chefs Marco and Adrian" style={{borderRadius: "50px"}}/>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chicago;
