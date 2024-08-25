import type { ICustomer } from 'components/CustomerSaysCard/types';
import christianImage from 'images/christian.jpg';
import joseImage from 'images/jose.jpg';
import leonardoImage from 'images/leonardo.jpg';
import ryanImage from 'images/ryan.jpg';


export const customerTestimonials: ICustomer[] = [
  {
    name: 'José',
    image: joseImage,
    rating: [1, 1, 1, 1, 1],
    says: `Little Lemon is a special one! The lemon chicken was perfectly cooked, and the atmosphere is cozy and welcoming. Their wine selection is also amazing!`,
  },
  {
    name: 'Leonardo',
    image: leonardoImage,
    rating: [1, 1, 1, 1, 0.5],
    says: `Great place for a family dinner. The lemon garlic shrimp was delicious. Service was a bit slow, but overall a great experience.`,
  },
  {
    name: 'Christian',
    image: christianImage,
    rating: [1, 1, 1, 1, 1],
    says: `Very popular place, always difficult to get a reservation on a Friday night. The lemon herb salmon was tasty. Great service and a lovely dining experience`,
  },
  {
    name: 'Ryan',
    image: ryanImage,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon never disappoints! The greek salad is a must-try. A bit crowded, but that's a good sign, right?`,
  },
];