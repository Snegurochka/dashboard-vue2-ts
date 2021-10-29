import { ProductsApi } from "@/API";
import { limitToFirst } from "@/const";
import { IProduct, RootState } from "@/interfaces/interfaces";
import { ActionTree, GetterTree, MutationTree } from "vuex";

export const namespaced = true;

export const state = {
  products: [] as IProduct[],
  isLoading: false,
  products_end: false,
  isError: false,
  product: {} as IProduct,
};

export type productStateType = typeof state;

export const mutations: MutationTree<productStateType> = {
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
  SET_LOADING(s: productStateType, isload: boolean) {
    s.isLoading = isload;
  },
  SET_ERROR(s: productStateType, isError: boolean) {
    s.isError = isError;
  },
};

export const actions: ActionTree<productStateType, RootState> = {
  async addProduct({ commit, dispatch }, product: IProduct) {
    return ProductsApi.addProduct(product)
      .then(() => {
        commit("ADD_PRODUCT", product);
      })
      .catch((error) => {
        const notification = {
          id: "",
          type: "error",
          message: "There was a problem:" + error,
        };
        // Request to another module
        dispatch("notifications/add", notification, { root: true });
      });
  },
  setProducts({ commit, dispatch }) {
    commit("SET_LOADING", true);
    let startAt = "";

    if (state.products.length) {
      startAt = "&startAt=" + state.products[state.products.length - 1].id;
    }

    ProductsApi.fetchProducts(startAt)
      .then((data) => {
        let products = data.filter((item) => item !== null);
        if (products.length < limitToFirst) {
          commit("SET_PRODUCTS_END", true);
        }
        if (state.products.length) {
          products = products.slice(1, products.length);
        }
        commit("SET_PRODUCTS", products);
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        const notification = {
          id: "",
          type: "error",
          message: "There was a problem:" + error,
        };
        dispatch("notifications/add", notification, { root: true });
        commit("SET_LOADING", false);
      });
  },

  setProduct({ commit, getters }, id: string) {
    commit("SET_ERROR", false);
    const product = getters.getProductById(id);
    if (product) {
      commit("SET_PRODUCT", product);
    } else {
      ProductsApi.fetchProduct(id)
        .then((data) => {
          // API doesn't send an error when product doesn't exist
          if (!data) {
            commit("SET_ERROR", true);
          } else {
            commit("SET_PRODUCT", data);
          }
        })
        .catch((error) => {
          // API doesn't send an error when product doesn't exist
          console.log(error);
        });
    }
  },
};

export const getters: GetterTree<productStateType, RootState> = {
  productsCount: (s: productStateType): number => s.products.length,
  getProductById: (s: productStateType) => (id: number) =>
    s.products.find((item) => item.id === id),
};
