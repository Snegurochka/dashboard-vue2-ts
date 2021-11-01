<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <textarea
      :value="value"
      @input="updateValue"
      class="form-control"
    ></textarea>
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
};
</script>

<style></style>
