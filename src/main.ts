import Vue from "vue";
import VueRouter from "vue-router";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";

const settings = {
  TTable: {
    classes: {
      table:
        "shadow w-11/12 ml-28 divide-y divide-gray-200 border-2 border-black",
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
      "w-full h-8 px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
    classes:
      "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 "
  },
  TInputGroup: {
    fixedClasses: {
      wrapper: "",
      label: "block",
      body: "",
      feedback: " text-sm text-sm",
      description: "text-gray-400 text-sm"
    },
    classes: {
      wrapper: "",
      label: "",
      body: "",
      feedback: "text-gray-400",
      description: "text-gray-400"
    },
    variants: {
      danger: {
        label: "text-red-500",
        feedback: "text-red-500"
      },
      success: {
        label: "text-green-500",
        feedback: "text-green-500"
      }
    }
  },
  TRadio: {
    fixedClasses:
      "transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed",
    classes: "text-blue-500 border-gray-300",
    variants: {
      error: "text-red-500 border-red-300",
      success: "text-green-500 border-green-300"
    }
  },
  TButton: {
    fixedClasses:
      "block px-4 py-2 transition duration-100 ease-in-out focus:border-red-900 focus:ring-2 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
    classes:
      "text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600",
    variants: {
      secondary:
        "text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",
      error:
        "text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",
      success:
        "text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",
      link: "text-blue-500 underline hover:text-blue-600"
    }
  }
};

Vue.config.productionTip = false;

import Inventory from "./views/Inventory.vue";
import NotFound from "./views/NotFound.vue";
import ComponentTest from "./views/ComponentTest.vue";
import CreateEditGames from "./views/CreateEditGames.vue";
import Login from "./views/Login.vue";
Vue.use(VueTailwind, settings);
Vue.use(VueRouter);

//    //<Login />
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
