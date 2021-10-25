import { url } from "./const";
import { IOrder, IProduct } from "./interfaces/interfaces";

export const OrdersApi = {
  fetchOrders: async (): Promise<IOrder> => {
    const endpoint = `${url}orders.json`;
    return await (await fetch(endpoint)).json();
  },
};

export const ProductsApi = {
  fetchProducts: async (): Promise<IProduct> => {
    const endpoint = `${url}products.json`;
    return await (await fetch(endpoint)).json();
  },

  async addProduct(product: IProduct) {
    const endpoint = `${url}products.json`;
    try {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(product),
      });
    } catch (e) {
      console.log(e);
    }
  },
};
