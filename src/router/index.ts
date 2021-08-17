import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/design",
    name: "Design",
    component: () => import("../views/design/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
