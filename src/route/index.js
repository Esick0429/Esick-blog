import { createRouter,createWebHashHistory} from "vue-router";
const home = () => import("../layout/HomeView.vue")
const Notfound = () =>import("../components/Not found.vue")
const archives = () => import("../components/Archives.vue")
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/:pathMatch(.*)", redirect: "/404"},
  {
    path:'/404',
    name:'404',
    component:Notfound
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/archives',
    name:'archives',
    component:archives
  },
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export {router}