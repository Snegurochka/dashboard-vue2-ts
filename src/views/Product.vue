<template>
  <div>
    <h3>Product {{ product.title }}</h3>
    {{ product.price }}$
    <p>Category: {{ getCategoryById(product.id_category).name }}</p>
    <p>
      {{ product.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from "vuex";
import { RootState } from "../interfaces/interfaces";
export default {
  props: ["id"],
  created(): void {
    this.setProduct(this.id);
  },
  computed: {
    ...mapGetters(["getCategoryById"]),
    ...mapState({
      product: (s: RootState) => s.products.product,
      categories: (s: RootState) => s.categories,
    }),
  },
  methods: {
    ...mapActions("products", ["setProduct"]),
  },
};
</script>

<style></style>
