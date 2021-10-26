<template>
  <section>
    <h3>Products {{ user.user.name }}</h3>
    <router-link :to="{ name: 'add-product' }"> add </router-link>
    <div class="products__list">
      <ProductItem
        class="product__item"
        v-for="(product, index) in products.products"
        :key="index"
        :product="product"
      >
      </ProductItem>
    </div>
    <button @click="loadmore" v-if="!products.products_end">Load more</button>
  </section>
</template>

<script lang="ts">
import ProductItem from "../components/ProductItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { ProductItem },
  created(): void {
    this.setProducts();
  },
  computed: {
    //...mapGetters(["productsCount"]),
    ...mapState(["user", "products"]),
  },
  methods: {
    loadmore(): void {
      this.setProducts();
    },
    ...mapActions("products", ["setProducts"]),
  },
};
</script>

<style>
.product__item {
  border-bottom: 1px solid black;
}
</style>
