import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user";
import * as products from "@/store/modules/products";
import * as notifications from "@/store/modules/notifications";

import { ICategory, IOrder, RootState } from "@/interfaces/interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserLoggedIn: false as boolean,
    categories: [
      { id: 1, name: "Cat 1" },
      { id: 2, name: "Cat 2" },
    ] as ICategory[],
    orders: [] as IOrder[],
  } as RootState,
  mutations: {},
  actions: {},
  modules: {
    user,
    products,
    notifications,
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
