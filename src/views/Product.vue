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

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("setProduct", this.id);
  },
  computed: {
    ...mapGetters(["getCategoryById"]),
    ...mapState(["product", "categories"]),
  },
};
</script>

<style></style>
