<template>
  <section class="wrapper">
    <div v-if="!isError" class="card">
      <router-view :product="product" />
    </div>
    <div v-else>
      <h3>Opps! This product not found</h3>
      <router-link :to="{ name: 'products' }"
        >Back to the products page</router-link
      >
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetails",
  props: ["id"],
  created() {
    this.$store.dispatch("products/setProduct", this.id);
  },
  computed: {
    ...mapState({
      product: (s) => s.products.product,
      isError: (s) => s.products.isError,
      categories: (s) => s.categories,
    }),
  },
};
</script>

<style scoped>
.wrapper {
  padding: 5rem;
  position: relative;
}
</style>
