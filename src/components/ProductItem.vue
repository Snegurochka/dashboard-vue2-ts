<template>
  <div class="wrapper">
    <span>{{ product.id }}</span>
    <span>{{ product.title }}</span>
    <span>{{ product.price }}</span>
    <span>{{ product.quantity }}</span>
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      view
    </router-link>
  </div>
</template>

<script>
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
