<template>
  <section>
    <h3>Products {{ user.name }}</h3>
    <router-link :to="{ name: 'add-product' }"> add </router-link>
    <div class="products__list">
      <ProductItem
        class="product__item"
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      >
      </ProductItem>
    </div>
    <button @click="loadmore" v-if="!products_end">Load more</button>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapState } from "vuex";

export default {
  components: { ProductItem },
  created() {
    this.$store.dispatch("setProducts");
  },
  computed: {
    //...mapGetters(["productsCount"]),
    ...mapState(["user", "products", "products_end"]),
  },
  methods: {
    loadmore() {
      this.$store.dispatch("setProducts");
    },
  },
};
</script>

<style>
.product__item {
  border-bottom: 1px solid black;
}
</style>
