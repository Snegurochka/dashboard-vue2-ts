import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import NotFound from "@/views/NotFound.vue";

describe("NotFound.vue", () => {
  it("renders inner text", () => {
    const msg = "Opps!";
    const wrapper = shallowMount(NotFound, {
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
