import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import OrderDetail from "../views/OrderDetail.vue";
import AddProduct from "../views/AddProduct.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: About,
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/Orders.vue"),
  },
  {
    path: "/order/:id",
    name: "order",
    component: OrderDetail,
    props: true,
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
