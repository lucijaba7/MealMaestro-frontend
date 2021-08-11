import Vue from "vue";
import VueRouter from "vue-router";
import SplashScreen from "../views/SplashScreen.vue";
import Registration from "../views/authentication/Registration.vue";
import Login from "../views/authentication/Login.vue";
import Home from "../views/Home.vue";
import GroceryList from "../views/GroceryList.vue";
import Plan from "../views/plan/Plan.vue";
import WeeklyPlan from "../views/plan/WeeklyPlan.vue";
import DailyPlan from "../views/plan/DailyPlan.vue";
import Fridge from "../views/fridge/Fridge.vue";
import FridgeOverview from "../views/fridge/FridgeOverview.vue";
import FridgeCategory from "../views/fridge/FridgeCategory.vue";
import Recipes from "../views/recipes/Recipes.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import NotFound from "../views/NotFound.vue";
import AuthService from "@/services/AuthService.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/splashScreen",
    name: "SplashScreen",
    component: SplashScreen
  },

  {
    path: "/plan",
    component: Plan,
    children: [
      {
        alias: "",
        path: "weekly",
        name: "WeeklyPlan",
        component: WeeklyPlan
      },
      {
        path: "daily",
        name: "DailyPlan",
        component: DailyPlan
      }
    ]
  },
  {
    path: "/fridge",
    component: Fridge,
    children: [
      {
        path: "",
        name: "FridgeOverview",
        component: FridgeOverview
      },
      {
        path: ":name",
        name: "FridgeCategory",
        component: FridgeCategory
      }
    ]
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/groceryList",
    name: "GroceryList",
    component: GroceryList
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  //catchall 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/splashScreen", "/registration", "/login"];
  const loginRequired = !publicPages.includes(to.path);
  const user = AuthService.getUser();

  if (loginRequired && !user) {
    return;
  }

  next();
});

export default router;
