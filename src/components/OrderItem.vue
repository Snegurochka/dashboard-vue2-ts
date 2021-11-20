<template>
  <div class="wrapper">
    <span>Order N {{ order.id }}</span>
    <span># {{ order.ref }}</span>
    <span>{{ order.customer }}</span>
    <span>{{ order.product }}</span>
    <router-link :to="{ name: 'order', params: { id: order.id } }">
      view
    </router-link>
  </div>
</template>

<script lang="ts">
import { IOrder } from "../interfaces/interfaces";
export default {
  name: "OrderItem",
  props: {
    order: {} as IOrder,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
</style>
