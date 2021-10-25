<template>
  <div class="dash_card">
    <slot name="heading"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dash_card {
  border-radius: 10px;
  background: cadetblue;
  max-width: 300px;
  padding: 24px;
}
</style>
