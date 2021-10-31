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

<style>
.button {
  color: var(--white);
  padding: 14px 20px;
  border-radius: 0.25rem;
  display: block;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
}

.btn-secondary {
  background-color: var(--darkGrey);
  border-color: var(--darkGrey);
}

.btn-secondary:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
}

.btn-big {
  font-size: 20px;
  padding: 14px 60px;
  margin: 0 auto;
}
</style>
