import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import GroceryList from '../views/GroceryList.vue'
import Fridge from '../views/fridge/Fridge.vue'
import FridgeOverview from '../views/fridge/FridgeOverview.vue'
import FridgeCategory from '../views/fridge/FridgeCategory.vue'
import Recipes from '../views/Recipes.vue'
import Browse from '../views/Browse.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/splashScreen',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/fridge',
    name: 'Fridge',
    component: Fridge,
    children: [
      {
        path: '',
        name: 'FridgeOverview',
        component: FridgeOverview
      },
      {
        path: ':name',
        name: 'FridgeCategory',
        component: FridgeCategory
      }
    ]
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/groceryList',
    name: 'GroceryList',
    component: GroceryList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})

export default router;
