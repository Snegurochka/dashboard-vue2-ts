<template>
  <tr>
    <td>{{ order.id }}</td>
    <td># {{ order.ref }}</td>
    <td>{{ order.customer }}</td>
    <td>{{ order.product }}</td>
    <td>{{ order.location }}</td>
    <td>
      <router-link :to="{ name: 'order', params: { id: order.id } }">
        view
      </router-link>
    </td>
  </tr>
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
