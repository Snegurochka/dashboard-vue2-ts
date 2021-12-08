import store from "@/store";

jest.mock("@/plugins/firebase", () => ({
  auth: {
    signOut: () => Promise.resolve(),
  },
}));

describe("Vuex Store", () => {
  test("TOGLE_AUTH mutation sets userLoggedIn to true", () => {
    expect(store.state.isUserLoggedIn).toBe(false);

    store.commit("TOGLE_AUTH");
    expect(store.state.isUserLoggedIn).not.toBe(false);
  });

  test("signout action sets isUserLoggedIn to false", async () => {
    await store.dispatch("signout");
    expect(store.state.isUserLoggedIn).toBe(false);
  });
});
