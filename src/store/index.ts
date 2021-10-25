import Vue from "vue";
import Vuex from "vuex";

import { ProductsApi } from "@/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { name: "Demo" },
    categories: [
      { id: 1, name: "Home decor" },
      { id: 2, name: "Hand Craft" },
    ],
    products: [
      { id: 1, name: "Dress1" },
      { id: 2, name: "Dress2" },
    ],
    orders: [
      {
        customer: "Alex",
        id: 1,
        product: "Dress1",
        ref: "REF_1",
        status: { code: "Shipped", id: 2 },
      },
    ],
  },
  mutations: {
    ADD_PRODUCT(s, product) {
      s.products.push(product);
    },
    SET_PRODUCTS(s, products) {
      s.products = products;
    },
  },
  actions: {
    async addProduct({ commit }, product) {
      return ProductsApi.addProduct(product).then(() => {
        commit("ADD_PRODUCT", product);
      });
    },
    setProducts({ commit }, products) {
      ProductsApi.fetchProducts().then((data) => {
        commit("SET_PRODUCTS", data);
      });
    },
  },
  modules: {},
  getters: {
    //Products
    productsCount: (s) => s.products.length,
    getProductById: (s) => (id: number) =>
      s.products.find((item) => item.id === id),
    // Orders
    shippedOrders: (s) => s.orders.filter((ord) => ord.status.id === 2),
    activeOrders: (s, getters) =>
      s.orders.length - getters.shippedOrders.length,
    getOrderById: (s) => (id: number) =>
      s.orders.find((item) => item.id === id),
  },
});
