<template>
  <div>
    <h2>Log in to your account</h2>
    <div v-if="error" class="error">There was an error!</div>
    <form @submit.prevent="login" class="card">
      <BaseInput
        label="Email address"
        v-model="user.email"
        placeholder="email"
        @blur="$v.user.email.$touch()"
        :class="{ error: $v.user.email.$error }"
        data-testid="email"
      />
      <template v-if="$v.user.email.$error">
        <p v-if="!$v.user.email.required" class="errorMessage">
          Email address is required.
        </p>
      </template>

      <BaseInput
        label="Password"
        v-model="user.password"
        type="password"
        placeholder="email"
        @blur="$v.user.password.$touch()"
        :class="{ error: $v.user.password.$error }"
        data-testid="password"
      />
      <template v-if="$v.user.password.$error">
        <p v-if="!$v.user.password.required" class="errorMessage">
          Password address is required.
        </p>
      </template>
      <BaseButton :disabled="$v.anyError" className="btn-primary"
        >Send</BaseButton
      >
      <p v-if="$v.anyError">Please fill out the required field(s).</p>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "demo@demo.com",
        password: "demodemo",
      },
      error: false,
    };
  },
  validations: {
    user: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    async login() {
      this.error = false;
      try {
        await this.$store.dispatch("login", this.user);
      } catch (e) {
        console.log(e);
        this.error = true;
      }
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>
