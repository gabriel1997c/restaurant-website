export interface ICustomer {
  image: string;
  name: string;
  rating: number[];
  says: string;
}

export interface ICustomerSaysCard {
  customer: ICustomer;
}
