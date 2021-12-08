import ProductItem from "@/components/ProductItem.vue";
import { shallowMount } from "@vue/test-utils";

describe("ProductItem.vue", () => {
  test("renders props.product when passed", () => {
    const product = {
      id: "1",
    };
    const wrapper = shallowMount(ProductItem, {
      propsData: {
        product,
      },
    });

    const element = wrapper.find(".wrapper span:first-child");

    expect(element.text()).toBe(product.id);
  });
});
