<template>
  <section>
    <h3>Products {{ user.user.name }}</h3>
    <Loading v-if="products.isLoading" />
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

<script>
import ProductItem from "../components/ProductItem.vue";
import Loading from "../components/Loading.vue";
import { mapState } from "vuex";

export default {
  components: { ProductItem, Loading },
  created() {
    this.$store.dispatch("products/setProducts");
  },
  computed: {
    //...mapGetters(["productsCount"]),
    ...mapState(["user", "products"]),
  },
  methods: {
    loadmore() {
      this.$store.dispatch("products/setProducts");
    },
  },
};
</script>

<style>
.product__item {
  border-bottom: 1px solid black;
}
</style>
