<template>
  <div>
    <h3>Product {{ product.title }}</h3>
    <p>{{ product.price | price }}</p>
    <p>
      {{ product.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.wrapper {
  padding: 5rem;
  position: relative;
}
</style>
