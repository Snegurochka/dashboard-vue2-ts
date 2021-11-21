<template>
  <tr class="table__row">
    <td>{{ order.id }}</td>
    <td># {{ order.ref }}</td>
    <td>{{ order.customer }}</td>
    <td>{{ order.product }}</td>
    <td>{{ order.location }}</td>
    <td>{{ order.price | price }}</td>
    <td class="w-4 status">
      {{ orderStatus }}
      <select v-if="isEditted" @change="setStatus">
        <option>---</option>
        <option v-for="(status, ind) in orderStatuses" :key="ind" :value="ind">
          {{ status }}
        </option>
      </select>
    </td>
    <td class="actions_btn">
      <base-button
        @click="$router.push({ name: 'order', params: { id: order.id } })"
        class="btn-primary"
      >
        <font-awesome-icon icon="eye" class="icon" />
      </base-button>
      <base-button @click="edit" class="btn-primary">
        <font-awesome-icon icon="pen" class="icon" />
      </base-button>
    </td>
  </tr>
</template>

<script>
//import { IOrder } from "../interfaces/interfaces";
import { ordersCollection } from "@/plugins/firebase";
import { orderStatuses } from "@/store/moc";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faPen);
export default {
  name: "OrderItem",
  props: {
    order: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateOrder: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isEditted: false,
      orderStatuses,
    };
  },
  computed: {
    orderStatus() {
      return this.orderStatuses[this.order.status];
    },
  },
  methods: {
    edit() {
      this.isEditted = true;
    },
    async setStatus(evt) {
      const id = evt.target.value;
      if (!id) {
        this.isEditted = false;
        return;
      }
      try {
        await ordersCollection.doc(this.order.ref).update({ status: id });
      } catch (error) {
        console.log(error);
        return;
      }

      this.isEditted = false;
      this.updateOrder(this.index, id);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 14px;
}

.table__row td {
  padding: 12px;
  border-bottom: 1px solid #000;
  text-align: left;
}

.status input {
  width: 100%;
}
</style>
