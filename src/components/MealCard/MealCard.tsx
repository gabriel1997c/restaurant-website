import MopedIcon from '@mui/icons-material/Moped';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ORDER_URL } from 'constants';

import { Link } from 'react-router-dom';

import { styles } from './styles';
import { IMealCard } from './types';

const MealCard: React.FC<IMealCard> = ({ meal }: IMealCard) => {
  return (
    <Card sx={styles.card} component="article">
      <CardMedia component="img" image={meal.image} alt={meal.name} style={{ ...styles.mealImg }} />
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1">{meal.name}</Typography>
        <Typography variant="body1">{meal.price}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2">{meal.description}</Typography>
        <Button variant="contained" size="large" color="secondary" component={Link} to={ORDER_URL}>
          Order a delivery <MopedIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default MealCard;
