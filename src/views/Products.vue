<template>
  <section>
    <h3>Products {{ user.name }}</h3>
    <router-link :to="{ name: 'add-product' }"> add </router-link>
    <div class="products__list">
      <ProductItem
        class="product__item"
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </ProductItem>
    </div>
    <div>Total: {{ productsCount }}</div>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: { ProductItem },
  computed: {
    ...mapGetters(["productsCount"]),
    ...mapState(["user", "products"]),
  },
};
</script>

<style>
.product__item {
  border-bottom: 1px solid black;
}
</style>
