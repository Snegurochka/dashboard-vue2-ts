<template>
  <form @submit.prevent="addProduct">
    <h3>Add product</h3>
    <p>
      <label>Product name</label>
      <input type="text" v-model="product.name" />
    </p>
    <p>
      <label>Category</label>
      <select type="text" v-model="product.category">
        <option v-for="category in categories" :key="category.id">
          {{ category.name }}
        </option>
      </select>
    </p>
    <input type="submit" value="Add" />
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
        name: "",
        category: "",
      };
    },
  },
};
</script>

<style></style>
