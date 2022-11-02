import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../layout/HomeView.vue");
const homeIndex = () => import("../components/Home.vue");
const Notfound = () => import("../components/Not found.vue");
const archives = () => import("../components/Archives.vue");
const tagList = () => import("../components/TagList.vue");
const routes: any = [
  { path: "/", redirect: "/index" },
  { path: "/:pathMatch(.*)", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: Notfound,
  },
  {
    path: "/",
    name: "home",
    component: home,
    children: [
      {
        path: "/index",
        name: homeIndex,
        component: homeIndex,
      },
      {
        path: "/archives",
        name: "archives",
        component: archives,
      },
      {
        path: "/tagList",
        name: "tagList",
        component: tagList,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { router };
