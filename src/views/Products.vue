<template>
  <section class="wrapp_content">
    <header>
      <h1>Products {{ user.user.name }}</h1>
      <BaseButton @click="$router.push('add-product')" class="btn-primary">
        <font-awesome-icon icon="plus" class="icon" />
        add</BaseButton
      >
    </header>

    <Loading v-if="products.isLoading" />

    <div class="products__list card">
      <div class="tbl_header">
        <div>Id</div>
        <div>Name</div>
        <div>Price</div>
        <div>Qty</div>
        <div>Actions</div>
      </div>
      <ProductItem
        class="product__item"
        v-for="(product, index) in products.products"
        :key="index"
        :product="product"
      >
      </ProductItem>
    </div>
    <BaseButton
      @click="loadmore"
      v-if="!products.products_end"
      class="btn-secondary btn-big"
      >Load more</BaseButton
    >
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import Loading from "../components/Loading.vue";
import { mapState } from "vuex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

export default {
  name: "Products",
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

<style lang="scss" scoped>
.products__list {
  margin: 38px 0;
}

.tbl_header {
  display: grid;
  grid-template-columns: 60px 1fr 60px 60px 120px;
  gap: 8px;
  padding: 14px;
  text-align: left;
}

.product__item {
  border-bottom: 1px solid var(--lightGrey);
}

.product__item:hover {
  background: var(--lighterBlue);
}
</style>
