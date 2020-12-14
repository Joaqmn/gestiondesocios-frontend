import Vue from "vue";
import VueRouter from "vue-router";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";
import { settings } from "./vueTailwindSettings";

Vue.config.productionTip = false;

import Inventory from "./views/Inventory.vue";
import NotFound from "./views/NotFound.vue";
import ComponentTest from "./views/ComponentTest.vue";
import CreateEditGames from "./views/CreateEditGames.vue";
import Login from "./views/Login.vue";
Vue.use(VueTailwind, settings);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login, name: "main", redirect: "/login" },
  { path: "/login", component: Login, name: "login" },
  { path: "/inventory", component: Inventory, name: "inventory" },
  //{ path: "/edit/:id", component: CreateEditGames, name: "edit", props: true },
  { path: "/ComponentTest", component: ComponentTest, name: "ComponentTest" },
  {
    path: "/edit",
    component: CreateEditGames,
    props: (route: { query: { id: any } }) => ({ query: route.query.id })
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
Vue.use(VueSplide);
new Vue({
  router,
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      const okRoute: any = routes.filter(route => {
        return route.path === this.currentRoute;
      });

      return okRoute[0] !== undefined ? okRoute[0].component : NotFound;
    }
  },
  render(h) {
    return h((this as any).ViewComponent);
  }
});
