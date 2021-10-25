export interface IOrder {
  customer: string;
  id: number;
  product: string;
  ref: string;
  status: { code: string; id: number };
}
