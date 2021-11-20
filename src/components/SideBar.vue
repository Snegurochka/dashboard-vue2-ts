<template>
  <div class="sidebar">
    <div v-show="isUserLoggedIn" class="user">
      Hi, {{ userName }}
      <div class="signout navbar__item" @click.prevent="signout">
        Logout <font-awesome-icon icon="sign-out-alt" class="icon" />
      </div>
    </div>
    <nav class="navbar">
      <router-link
        v-for="(item, ind) in items"
        :key="ind"
        class="navbar__item"
        :to="{ name: item.route }"
      >
        <font-awesome-icon :icon="item.icon" class="icon" /> {{ item.text }}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHome,
  faFolder,
  faShoppingBag,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faHome, faFolder, faShoppingBag, faSignOutAlt);

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
    ...mapState(["isUserLoggedIn"]),
    userName() {
      return this.$store.state.user.user.name;
    },
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "auth" });
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-content: flex-start;
  flex-direction: row;
  background: var(--darkGrey);
  box-shadow: 1px 0 20px 0 var(--darkGrey);
  z-index: 99;
}

.user {
  padding: 24px 24px 0;
  color: var(--white);
}

.navbar__item.signout {
  padding: 8px 0;
  cursor: pointer;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 48px;
}

.navbar__item {
  padding: 14px 24px;
  width: 100%;
  color: var(--lighterBlue);
  text-decoration: none;
  transition: all 200ms ease;
}

.navbar__item:hover,
.navbar__item.router-link-exact-active {
  color: var(--primary);
}

.icon {
  margin-right: 8px;
}
</style>
