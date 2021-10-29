<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input :type="type" :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateValue(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style></style>
