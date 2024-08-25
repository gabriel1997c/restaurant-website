import { Box, Typography } from '@mui/material';
import { starRatings } from 'constants';

import { styles } from './styles';
import type { ICustomerSaysCard } from './types';

const CustomerSaysCard: React.FC<ICustomerSaysCard> = ({ customer }: ICustomerSaysCard) => {
  return (
    <Box sx={styles.customerSaysCard} component="article">
      <img
        src={customer.image}
        alt={customer.name}
        style={{...styles.personImg}}
      />
      <Typography variant="body1">{customer.name}</Typography>
      <span>
        {customer.rating.map((ratingPoint, index) => {
          const IconComponent = starRatings[ratingPoint];
          return <IconComponent key={index} fontSize="medium" sx={styles.rating} />;
        })}
      </span>
      <blockquote>
        <Typography variant="body2">"{customer.says}"</Typography>
      </blockquote>
    </Box>
  );
};

export default CustomerSaysCard;
