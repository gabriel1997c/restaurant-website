import { Button, Grid, Typography } from '@mui/material';
import MealCard from 'components/MealCard';
import { MENU_URL } from 'constants';
import { specialMeals } from 'data';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { styles } from './styles';

const Specials: FC = () => {
  return (
    <Grid container sx={styles.specials} component="section" pt={5}>
      <Grid container item xs={12} justifyContent="space-between" alignItems="center" pt={6}>
        <Typography variant="h2" sx={styles.specialsHeader}>
          This week's specials!
        </Typography>
        <Button variant="contained" size="large" color="secondary" component={Link} to={MENU_URL}>
          Online Menu
        </Button>
      </Grid>
      <Grid container item xs={12} spacing={4} py={4}>
        {specialMeals.slice(0, 3).map((meal, index) => (
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <MealCard meal={meal} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Specials;
