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
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style></style>
