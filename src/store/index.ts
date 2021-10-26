import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user";
import * as products from "@/store/modules/products";

import { ICategory, IOrder } from "@/interfaces/interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [] as ICategory[],
    orders: [] as IOrder[],
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    products,
  },
  getters: {
    // Categories
    getCategoryById: (s) => (id: number) =>
      s.categories.find((item) => item.id === id),
    // Orders
    shippedOrders: (s) => s.orders.filter((ord) => ord.status.id === 2),
    activeOrders: (s, getters) =>
      s.orders.length - getters.shippedOrders.length,
    getOrderById: (s) => (id: number) =>
      s.orders.find((item) => item.id === id),
  },
});
