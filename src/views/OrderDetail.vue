<template>
  <section class="wrapp_content">
    <h1>Details # {{ id }}</h1>
    <div class="card">
      <loading v-if="order.isLoading" />
      <template v-else>
        <div class="brief">
          <div>
            <h3>Customer info:</h3>
            Name: {{ order.customer.name }}<br />
            Location: {{ order.location }}<br />
            Address: {{ order.customer.address }}
          </div>
          <div>
            <h3>Order Details:</h3>
            Total: {{ order.price | price }} <br />
            Status: {{ orderStatus }}
          </div>
        </div>

        <div>
          <h3>Products:</h3>
          <div>{{ order.product }} - {{ order.price | price }}</div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { ordersCollection, customersCollection } from "@/plugins/firebase";
import Loading from "../components/Loading.vue";
import { orderStatuses } from "@/store/moc";

export default {
  components: { Loading },
  props: ["id"],
  data() {
    return {
      order: {
        isLoading: true,
      },
      orderStatuses,
    };
  },
  computed: {
    orderStatus() {
      if (!this.order) return;
      return this.orderStatuses[this.order.status];
    },
  },
  async created() {
    const snapshot = await ordersCollection.where("id", "==", this.id).get();
    snapshot.forEach((document) => {
      this.order = {
        ...document.data(),
        ref: document.id,
      };
    });

    const snapshotCustomers = await customersCollection
      .where("name", "==", this.order.customer)
      .get();
    snapshotCustomers.forEach((document) => {
      this.order.customer = {
        ...document.data(),
      };
      this.order.isLoading = false;
    });
  },
};
</script>

<style scoped>
.brief {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 58px;
  margin-bottom: 48px;
}
</style>
