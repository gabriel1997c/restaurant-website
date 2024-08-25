import bruschettaImg from 'images/bruschetta.jpg';
import greekSaladImg from 'images/greek_salad.jpg';
import lemonDessertImg from 'images/lemon_dessert.jpg';

export const specialMeals = [
  {
    name: 'Greek Salad',
    image: greekSaladImg,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImg,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImg,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];
