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
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </thead>
        <order-item
          class="item"
          v-for="(order, index) in orders"
          :key="order.id"
          :order="order"
          :index="index"
          :updateOrder="updateOrder"
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
    this.getOrders();
  },
  methods: {
    updateOrder(ind, val) {
      this.orders[ind].status = val;
    },

    async getOrders() {
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
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  text-align: left;
  padding: 12px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
</style>
