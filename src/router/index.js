import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Menage from "@/views/Menage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "menage",
    // not redirect
    // alias: "/menage",
    path: "/menage-music",
    component: Menage,
    beforeEnter: (to, from, next) => {
      console.log("Manage Route Guard");
      next();
    },
  },
  {
    path: "/menage",
    redirect: { name: "menage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

//global guard
router.beforeEach((to, from, next) => {
  console.log("Global Guard.");

  next();
});

export default router;
