import { ProductsApi } from "@/API";
import { limitToFirst } from "@/const";
import { IProduct, RootState } from "@/interfaces/interfaces";
import { ActionTree } from "vuex";

export const namespaced = true;

export const state = {
  products: [] as IProduct[],
  products_end: false,
  product: {} as IProduct,
};

export type productStateType = typeof state;

export const mutations = {
  ADD_PRODUCT(s: productStateType, product: IProduct) {
    s.products.push(product);
  },
  SET_PRODUCTS(s: productStateType, products: IProduct[]) {
    s.products = [...s.products, ...products];
  },
  SET_PRODUCTS_END(s: productStateType, payload: boolean) {
    s.products_end = payload;
  },
  SET_PRODUCT(s: productStateType, product: IProduct) {
    s.product = product;
  },
};

export const actions: ActionTree<productStateType, RootState> = {
  async addProduct({ commit }, product: IProduct) {
    return ProductsApi.addProduct(product).then(() => {
      commit("ADD_PRODUCT", product);
    });
  },
  setProducts({ commit }) {
    let startAt = "";

    if (state.products.length) {
      startAt = "&startAt=" + state.products[state.products.length - 1].id;
    }

    ProductsApi.fetchProducts(startAt).then((data) => {
      let products = data.filter((item) => item !== null);
      if (products.length < limitToFirst) {
        commit("SET_PRODUCTS_END", true);
      }
      if (state.products.length) {
        products = products.slice(1, products.length);
      }
      commit("SET_PRODUCTS", products);
    });
  },

  setProduct({ commit, getters }, id: string) {
    const product = getters.getProductById(id);
    if (product) {
      commit("SET_PRODUCT", product);
    } else {
      ProductsApi.fetchProduct(id).then((data) => {
        commit("SET_PRODUCT", data);
      });
    }
  },
};

export const getters = {
  productsCount: (s: productStateType) => s.products.length,
  getProductById: (s: productStateType) => (id: number) =>
    s.products.find((item) => item.id === id),
};
