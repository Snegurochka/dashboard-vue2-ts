import { url } from "./const";
import { IOrder } from "./interfaces/interfaces";

const API = {
  fetchOrders: async (): Promise<IOrder> => {
    const endpoint = `${url}orders.json`;
    return await (await fetch(endpoint)).json();
  },
};

export default API;
