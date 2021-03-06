import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import HotelList from "../views/hotels/HotelList.vue";
import HotelNew from "../views/hotels/HotelNew.vue";
import HotelDetails from "../views/hotels/HotelDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/hotels",
    name: "HotelList",
    component: HotelList,
  },
  {
    path: "/hotel-new",
    name: "HotelNew",
    component: HotelNew,
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
    path: '/hotels/:id',
    component: HotelDetails,
    props: true,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
