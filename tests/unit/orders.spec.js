import { shallowMount } from "@vue/test-utils";
import Orders from "@/views/Orders.vue";
import OrderItem from "@/components/OrderItem.vue";

jest.mock("@/plugins/firebase", () => {});

describe("Orders.vue", () => {
  test("By default, the order list should be empty.", () => {
    Orders.methods.getOrders = () => false;
    const component = shallowMount(Orders);
    const items = component.findAllComponents(OrderItem);
    expect(items).toHaveLength(0);
  });

  test("renders list of Orders", () => {
    const orders = [{}, {}, {}];
    Orders.methods.getOrders = () => false;

    const component = shallowMount(Orders, {
      data() {
        return {
          orders,
        };
      },
    });
    const items = component.findAllComponents(OrderItem);
    expect(items).toHaveLength(orders.length);
  });
});
