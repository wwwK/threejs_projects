import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pipeline",
  },
  {
    path: "/pipeline",
    component: () => import("../components/Pipeline.vue"),
  },
  {
    path: "/particle",
    component: () => import("../components/Particle.vue"),
  },
  {
    path: "/newPipe",
    component: () => import("../components/newPipe.vue"),
  },
  {
    path: "/opacityPipe",
    component: () => import("../components/OpacityPipe.vue"),
  },
  {
    path: "/encapsulate",
    component: () => import("../components/Encapsulate.vue"),
  },
  {
    path: "/arcThree",
    component: () => import("../components/webGLLoadServer.vue"),
  },
  {
    path: "/newArcgis",
    component: () => import("../components/newArcgis.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
