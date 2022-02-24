import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  { path: "/", component: () => import("../components/a.vue"),children:[
      {
          path: 'aa',component:() => import("../components/aa.vue")
      }
  ] },
  { path: "/b", component: () => import("../components/b.vue") },
  { path: "/c", component: () => import("../components/c.vue") },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new Router({
  routes,
  mode: "hash",
});

export default router;
