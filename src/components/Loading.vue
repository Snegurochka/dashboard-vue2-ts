<template>
  <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  border: 5px solid hsl(0, 0%, 66%);
  border-top: 5px solid var(--darkGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
