export interface IOrder {
  customer: string;
  id: number;
  product: string;
  ref: string;
  status: { code: string; id: number };
}

export interface IProduct {
  id: number;
  name: string;
  ref: string;
  category: string;
}
