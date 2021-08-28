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
import YourRecipes from "../views/recipes/YourRecipes.vue";
import SavedRecipes from "../views/recipes/SavedRecipes.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";
import { store } from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/recipes",
    component: Recipes,
    children: [
      {
        alias: "",
        path: "yourRecipes",
        name: "YourRecipes",
        component: YourRecipes
      },
      {
        path: "savedRecipes",
        name: "SavedRecipes",
        component: SavedRecipes
      }
    ],
    meta: {
      requiresAuth: true
    }
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
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/groceryList",
    name: "GroceryList",
    component: GroceryList,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },

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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/splashScreen");
  } else {
    next();
  }
});

export default router;
