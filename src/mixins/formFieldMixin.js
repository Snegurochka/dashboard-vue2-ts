export const formFieldMixin = {
  inheritAttrs: false,
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
