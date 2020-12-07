import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "@/assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserCircle);
library.add(faAlignJustify);
library.add(faPlug);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

import Login from "./views/Login.vue";
import Inventory from "./views/Inventory.vue";
import NotFound from "./views/NotFound.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: App, name: "main" },
  { path: "/login", component: App, name: "login" },
  { path: "/inventory", component: Inventory, name: "inventory" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

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
