<template>
  <div>
    <h3>Product {{ product.title }}</h3>
    {{ product.price }}$
    <p>
      {{ product.description }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("products/setProduct", this.id);
  },
  computed: {
    ...mapState({
      product: (s) => s.products.product,
      categories: (s) => s.categories,
    }),
  },
};
</script>

<style></style>
