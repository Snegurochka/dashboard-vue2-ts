<template>
  <button type="submit" class="button" :className="className" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
  },
};
</script>

<style></style>
