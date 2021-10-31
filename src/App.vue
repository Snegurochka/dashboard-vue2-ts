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

.card {
  background: #fff;
  padding: 24px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);

  h3 {
    margin: 0 0 14px;
    border-bottom: 1px solid var(--lightGrey);
    padding-bottom: 8px;
  }
}
</style>
