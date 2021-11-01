<template>
  <main class="wrapper">
    <form @submit.prevent="addProduct" class="card">
      <h3><font-awesome-icon icon="plus" class="icon" /> Add product</h3>
      <BaseInput
        label="Product name"
        v-model="product.title"
        placeholder="Title"
        @blur="$v.product.title.$touch()"
        :class="{ error: $v.product.title.$error }"
      />
      <template v-if="$v.product.title.$error">
        <p v-if="!$v.product.title.required" class="errorMessage">
          Product name is required.
        </p>
      </template>
      <BaseSelectObj
        label="Category"
        :options="categories"
        v-model="product.id_category"
        @blur="$v.product.id_category.$touch()"
        :class="{ error: $v.product.id_category.$error }"
      />
      <template v-if="$v.product.id_category.$error">
        <p v-if="!$v.product.id_category.required" class="errorMessage">
          Category is required.
        </p>
      </template>
      <BaseInput
        label="Price"
        v-model="product.price"
        @blur="$v.product.price.$touch()"
        :class="{ error: $v.product.price.$error }"
      />
      <template v-if="$v.product.price.$error">
        <p v-if="!$v.product.price.required" class="errorMessage">
          Price is required.
        </p>
      </template>
      <BaseInput
        label="Quantity"
        type="number"
        v-model="product.quantity"
        @blur="$v.product.quantity.$touch()"
        :class="{ error: $v.product.quantity.$error }"
      />
      <template v-if="$v.product.quantity.$error">
        <p v-if="!$v.product.quantity.required" class="errorMessage">
          Quantity is required.
        </p>
      </template>
      <BaseTextarea
        label="Description"
        v-model="product.description"
        @blur="$v.product.description.$touch()"
        :class="{ error: $v.product.description.$error }"
      />
      <template v-if="$v.product.description.$error">
        <p v-if="!$v.product.description.required" class="errorMessage">
          Description is required.
        </p>
      </template>
      <BaseButton :disabled="$v.anyError">Add</BaseButton>
      <p v-if="$v.anyError">Please fill out the required field(s).</p>
    </form>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

export default {
  name: "AddProduct",
  data() {
    return {
      product: this.createNewProductObj(),
    };
  },
  computed: {
    ...mapState(["user", "categories"]),
  },
  validations: {
    product: {
      title: { required },
      id_category: { required },
      price: { required },
      quantity: { required },
      description: { required },
    },
  },
  methods: {
    addProduct() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$store.dispatch("products/addProduct", this.product).then(() => {
          this.$router.push({ name: "products" });
          this.product = this.createNewProductObj();
        });
      }
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

<style scoped>
.wrapper {
  padding: 5rem;
  position: relative;
}
</style>
