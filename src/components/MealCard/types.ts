export interface IMeal {
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface IMealCard {
  meal: IMeal;
}