<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
      class="form-control"
    />
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin";

export default {
  mixins: [formFieldMixin],
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>

<style></style>
