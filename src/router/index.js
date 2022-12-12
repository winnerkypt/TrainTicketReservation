import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/Home.vue";
import Purchase from "../view/Purchase.vue";
import Login from "../view/Login.vue";

const history = createWebHashHistory("/a/");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: Purchase,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({ history, routes });

export default router;
