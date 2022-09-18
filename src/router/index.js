import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/editBlog",
      name: "EditBlog",
      component: () => import("../views/EditBlog.vue"),
    },
    {
      path: "/createBlog",
      name: "CreateBlog",
      component: () => import("../views/CreateBlog.vue"),
    },
    {
      path: "/updateBlog/:id",
      name: "UpdateBlog",
      component: () => import("../views/UpdateBlog.vue"),
    },
    {
      path: "/blogDetail/:id",
      name: "BlogDetail",
      component: () => import("../views/BlogDetail.vue"),
    },
  ],
});

export default router;
