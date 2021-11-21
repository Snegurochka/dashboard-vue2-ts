<template>
  <div id="app">
    <section class="main_wrapper">
      <SideBar></SideBar>
      <router-view />
    </section>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  name: "App",

  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
/* css reset */
p,
ol,
ul {
  margin: 0;
  padding: 0;
}

button {
  all: unset;
}

ol,
ul {
  list-style: none;
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

:root {
  --maxWidth: 1280px;
  --white: #fff;
  --lightGrey: #dedede;
  --lightBlue: #dbeafe;
  --lighterBlue: #f6faff;
  --darkGrey: #3f4d67;
  --bg: #f4f7fa;
  --primary: #80ceca;
  --primary-hover: #40a6a0;
}

.main_wrapper {
  max-width: 100%;
  display: grid;
  grid-template-columns: 235px 1fr;

  h1 {
    font-weight: 600;
    font-size: 40px;
    margin: 0 0 24px;
  }
}

.wrapp_content {
  padding: 5rem;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h1 {
      margin-bottom: 0px;
    }
  }
}

.card {
  background: var(--white);
  padding: 24px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);

  h3 {
    margin: 0 0 14px;
    border-bottom: 1px solid var(--lightGrey);
    padding-bottom: 8px;
  }
}

.field {
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--darkGrey);
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid var(--lightGrey);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0;
    box-shadow: 0;
    -webkit-transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%231D1D42' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}

.field.error {
  margin-bottom: 4px;
}

.field.error .form-control {
  border-color: red;
}

.errorMessage {
  color: red;
  margin-bottom: 14px;
}

.actions_btn {
  display: flex;
  gap: 8px;
}

.w-4 {
  width: 1rem;
}
</style>
