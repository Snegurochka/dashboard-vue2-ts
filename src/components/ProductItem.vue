<template>
  <div class="wrapper">
    <span>{{ product.id }}</span>
    <span>{{ product.title }}</span>
    <span>{{ product.price | price }}</span>
    <span>{{ product.quantity }}</span>
    <span>
      <BaseButton
        @click="$router.push({ name: 'product', params: { id: product.id } })"
        class="btn-primary"
      >
        <font-awesome-icon icon="eye" class="icon" />
        View
      </BaseButton>
    </span>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 60px 1fr 60px 60px 120px;
  gap: 8px;
  padding: 14px;
  text-align: left;
}
</style>
