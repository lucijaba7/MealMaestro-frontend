import Vue from "vue";
import VueRouter from "vue-router";
import SplashScreen from "../views/SplashScreen.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import GroceryList from "../views/GroceryList.vue";
import Plan from "../views/plan/Plan.vue";
import WeeklyPlan from "../views/plan/WeeklyPlan.vue";
import DailyPlan from "../views/plan/DailyPlan.vue";
import Fridge from "../views/fridge/Fridge.vue";
import FridgeOverview from "../views/fridge/FridgeOverview.vue";
import FridgeCategory from "../views/fridge/FridgeCategory.vue";
import Recipes from "../views/Recipes.vue";
import YourProfile from "../views/YourProfile.vue";
import NotFound from "../views/NotFound.vue";

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
    path: "/profile",
    name: "YourProfile",
    component: YourProfile
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

export default router;
