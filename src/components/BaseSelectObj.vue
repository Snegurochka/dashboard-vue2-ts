<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="form-control form-select"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        :selected="option.id === value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin";

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
