import { notificationStateType } from "@/store/modules/notifications";
import { productStateType } from "@/store/modules/products";

export interface RootState {
  isUserLoggedIn: boolean;
  categories: ICategory[];
  orders: IOrder[];
  user: IUser;
  products: productStateType;
  notifications: notificationStateType;
}

export interface IUser {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IOrder {
  customer: string;
  id: number;
  product: string;
  ref: string;
  status: { code: string; id: number };
}

export interface IProduct {
  id: number;
  id_category: number;
  id_seller: number;
  price: number;
  quantity: number;
  title: string;
  description: string;
}

export interface INotification {
  id: number;
  type: string;
  message: string;
}
