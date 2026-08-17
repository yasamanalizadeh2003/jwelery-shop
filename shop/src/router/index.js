import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/products/Products.vue";
import Home from "../components/layout/Home.vue";
import Cart from "../components/cart/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product",
      component: Products,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
