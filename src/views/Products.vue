<template>
  <section>
    <h3>Products</h3>
    <div class="products__list">
      <ProductItem
        class="product__item"
        v-for="product in products"
        :key="product.id"
        :order="order"
      >
      </ProductItem>
    </div>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: { ProductItem },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style>
.product__item {
  border-bottom: 1px solid black;
}
</style>
