<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select :value="value" @input="updateSelect" v-bind="$attrs">
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
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateSelect(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style></style>
