<template>
  <form @submit.prevent="addProduct">
    <h3>Add product</h3>
    <BaseInput
      label="Product name"
      v-model="product.title"
      placeholder="Title"
    />
    <BaseSelectObj
      label="Category"
      :options="categories"
      v-model="product.id_category"
    />
    <BaseInput label="Price" v-model="product.price" />
    <BaseInput label="Quantity" type="number" v-model="product.quantity" />
    <BaseTextarea label="Description" v-model="product.description" />
    <BaseButton>Add</BaseButton>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      product: this.createNewProductObj(),
    };
  },
  computed: {
    ...mapState(["user", "categories"]),
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.product).then(() => {
        this.$router.push({ name: "products" });
        this.product = this.createNewProductObj();
      });
    },
    createNewProductObj() {
      const id = Math.floor(Math.random() * 100000);
      return {
        id,
        id_seller: 1,
        id_category: 0,
        price: 0,
        quantity: 0,
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style></style>
