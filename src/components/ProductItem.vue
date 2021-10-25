<template>
  <div class="wrapper">
    <span>Product N {{ product.id }}</span>
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
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
</style>
