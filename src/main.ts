import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";
const settings = {
  TTable: {
    classes: {
      table: "shadow w-11/12 ml-28 divide-y divide-gray-200",
      tbody: "bg-white divide-y divide-gray-200",
      td: "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700",
      theadTh:
        "p-3 border-b border-gray-800 bg-red-200 text-left text-xs leading-5 font-medium text-gray-700 uppercase tracking-wider"
    },
    variants: {
      thin: {
        td: "p-1 whitespace-no-wrap text-sm leading-4 text-gray-700 bg-gray-50",
        theadTh:
          "p-1 border-b border-gray-200 bg-gray-400 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
      }
    }
  },
  TPagination: {
    wrapper: "table border-collapse text-center bg-white mx-auto mt-2",
    element: "w-8 h-8 border table-cell",
    disabledElement: "w-8 h-8 border table-cell",
    ellipsisElement: "w-8 h-8 border hidden md:table-cell",
    activeButton: "bg-gray-300 w-full h-full",
    disabledButton: "opacity-25 w-full h-full cursor-not-allowed",
    button: "hover:bg-gray-200 w-full h-full",
    ellipsis: ""
  },
  TInput: {
    fixedClasses:
      "w-5/6 h-8 px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
    classes:
      "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 "
  }
};

Vue.config.productionTip = false;

import Inventory from "./views/Inventory.vue";
import NotFound from "./views/NotFound.vue";
Vue.use(VueTailwind, settings);
Vue.use(VueRouter);
const routes = [
  { path: "/", component: App, name: "main", redirect: "/login" },
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
