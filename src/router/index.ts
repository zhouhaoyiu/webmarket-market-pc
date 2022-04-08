import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/list/index.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: never) {
  return (originalPush.call(this, location) as any).catch((err: Error) => err);
};
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
    children: [
      {
        path: "list",
        name: "List",
        component: List,
      },
      {
        path: "detail",
        name: "Detail",
        component: () =>
          import(
            /* webpackChunkName: "product" */ "../views/product/index.vue"
          ),
      },
      {
        path: "ShoppingCar",
        name: "ShoppingCar",
        component: () =>
          import(
            /* webpackChunkName: "shoppingCar" */ "../views/shoppingCar/index.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/user/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
