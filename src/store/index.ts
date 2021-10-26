import Vue from "vue";
import Vuex from "vuex";

import { ProductsApi } from "@/API";
import { IOrder, IProduct } from "@/interfaces/interfaces";
import { limitToFirst } from "@/const";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 1, name: "Demo" },
    categories: [
      { id: 1, name: "Home decor" },
      { id: 2, name: "Hand Craft" },
    ],
    products: [] as IProduct[],
    products_end: false,
    product: {} as IProduct,
    orders: [] as IOrder[],
  },
  mutations: {
    ADD_PRODUCT(s, product) {
      s.products.push(product);
    },
    SET_PRODUCTS(s, products) {
      s.products = [...s.products, ...products];
    },
    SET_PRODUCTS_END(s, payload) {
      s.products_end = payload;
    },
    SET_PRODUCT(s, product) {
      s.product = product;
    },
  },
  actions: {
    async addProduct({ commit }, product) {
      return ProductsApi.addProduct(product).then(() => {
        commit("ADD_PRODUCT", product);
      });
    },
    setProducts({ commit }) {
      let startAt = "";

      if (this.state.products.length) {
        startAt =
          "&startAt=" + this.state.products[this.state.products.length - 1].id;
      }

      ProductsApi.fetchProducts(startAt).then((data) => {
        let products = data.filter((item) => item !== null);
        if (products.length < limitToFirst) {
          commit("SET_PRODUCTS_END", true);
        }
        if (this.state.products.length) {
          products = products.slice(1, products.length);
        }
        commit("SET_PRODUCTS", products);
      });
    },

    setProduct({ commit }, id) {
      ProductsApi.fetchProduct(id).then((data) => {
        console.log(data);

        commit("SET_PRODUCT", data);
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
