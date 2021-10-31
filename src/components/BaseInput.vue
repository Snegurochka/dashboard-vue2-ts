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
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
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
