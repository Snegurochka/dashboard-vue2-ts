<template>
  <main class="wrapper">
    <login-form />
  </main>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: { LoginForm },
  name: "Auth",
};
</script>

<style scoped>
.wrapper {
  padding: 5rem;
  position: relative;
  width: 676px;
  margin: 0 auto;
}
</style>
