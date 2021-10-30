<template>
  <div class="sidebar">
    <span class="user">Hi, {{ userName }}</span>
    <nav class="navbar">
      <router-link
        v-for="(item, ind) in items"
        :key="ind"
        class="navbar__item"
        :to="{ name: item.route }"
        ><font-awesome-icon :icon="item.icon" class="icon" />{{
          item.text
        }}</router-link
      >
    </nav>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHome,
  faFolder,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faHome, faFolder, faShoppingBag);

export default {
  name: "SideBar",

  data: () => ({
    selectedItem: 0,
    items: [
      { icon: "home", text: "Home", route: "home" },
      { icon: "user-secret", text: "Profile", route: "profile" },
      { icon: "folder", text: "Products", route: "products" },
      { icon: "shopping-bag", text: "Orders", route: "orders" },
    ],
  }),

  computed: {
    userName() {
      return this.$store.state.user.user.name;
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: row;
  background: var(--darkGrey);
  box-shadow: 1px 0 20px 0 var(--darkGrey);
  z-index: 99;
}

.user {
  padding: 24px;
  color: var(--white);
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.navbar__item {
  padding: 14px 24px;
  width: 100%;
  color: honeydew;
  text-decoration: none;
}

.navbar__item:hover {
  color: #1dc4e9;
}

.navbar__item.active {
  color: #1dc4e9;
}

.icon {
  padding-right: 8px;
}
</style>
