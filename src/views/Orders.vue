<template>
  <section class="wrapp_content">
    <h1>Orders</h1>
    <div class="card">
      <table class="table">
        <thead>
          <th>Id</th>
          <th>Ref</th>
          <th>Customer</th>
          <th>Product</th>
          <th>location</th>
          <th>Actions</th>
        </thead>
        <order-item
          class="item"
          v-for="order in orders"
          :key="order.id"
          :order="order"
        >
        </order-item>
      </table>
    </div>
  </section>
</template>

<script>
import OrderItem from "./../components/OrderItem.vue";
import { auth, ordersCollection } from "@/plugins/firebase";

export default {
  name: "Orders",
  components: { OrderItem },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    console.log(auth.currentUser.uid);
    const snapshot = await ordersCollection
      .where("seller_id", "==", auth.currentUser.uid)
      .get();

    snapshot.forEach((document) => {
      const order = {
        ...document.data(),
        ref: document.id,
      };
      this.orders.push(order);
    });

    console.log(this.orders);
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}

.item {
  border-bottom: 1px solid black;
}

.list-header {
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
</style>
