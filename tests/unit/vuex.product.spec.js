import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { state, mutations } from "@/store/modules/products";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Vuex Product Store", () => {
  test("SET_LOADING mutation sets isLoading to true", () => {
    const store = new Vuex.Store({
      modules: {
        products: {
          state,
          mutations,
          namespaced: false,
        },
      },
    });
    expect(store.state.products.isLoading).toBe(false);

    store.commit("SET_LOADING", true);
    expect(store.state.products.isLoading).not.toBe(false);
  });
});
