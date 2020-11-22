import Vue from "vue";
import VueRouter from "vue-router";
import Films from "@/views/Films";
import People from "@/views/People";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Films",
    component: Films
  },
  {
    path: "/people",
    name: "People",
    component: People
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
