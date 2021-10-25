<template>
  <section>
    <h3>Orders</h3>
    <div class="order__list">
      <OrderItem
        class="order__item"
        v-for="order in orders"
        :key="order.id"
        :order="order"
      >
      </OrderItem>
    </div>
  </section>
</template>

<script>
import OrderItem from "./../components/OrderItem.vue";
import { OrdersApi } from "./../API";

export default {
  components: { OrderItem },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    this.orders = await OrdersApi.fetchOrders();
  },
};
</script>

<style>
.order__item {
  border-bottom: 1px solid black;
}
</style>
