import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/join-us",
      name: "join",
      component: () => import("../components/JoinForm.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../components/PrivacyPolicy.vue"),
    },
    {
      path: "/developer",
      name: "developer",
      component: () => import("../components/WebsiteInformation.vue"),
    },
  ],
});

export default router;
