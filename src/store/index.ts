import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user";
import * as products from "@/store/modules/products";
import * as notifications from "@/store/modules/notifications";

import { ICategory, IOrder, ISeller, RootState } from "@/interfaces/interfaces";
import { auth, sellersCollection } from "@/plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserLoggedIn: false as boolean,
    seller: {} as ISeller,
    categories: [
      { id: 1, name: "Cat 1" },
      { id: 2, name: "Cat 2" },
    ] as ICategory[],
    orders: [] as IOrder[],
  } as RootState,
  mutations: {
    TOGLE_AUTH(s) {
      s.isUserLoggedIn = !s.isUserLoggedIn;
    },
    SET_SELLER(s, payload: ISeller) {
      s.seller = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      if (auth.currentUser) {
        const seller = await sellersCollection.doc(auth.currentUser.uid).get();
        commit("TOGLE_AUTH");

        commit("SET_SELLER", seller.data());
      }
    },

    async signout({ commit }) {
      await auth.signOut();
      commit("TOGLE_AUTH");
    },
  },
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
