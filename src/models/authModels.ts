export interface IUser {
  id: string;
  name: string;
  username: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  token: string | null;
  cartId: string;
  orders: Array<string>;
}
