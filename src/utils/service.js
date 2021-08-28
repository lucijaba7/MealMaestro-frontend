import axios from "axios";
import { store } from "../store";

export default axios.create({
  baseURL: " https://meal-maestro-backend-lvaresko.vercel.app",
  headers: {
    Authorization: `Bearer ${store.getters.isAuthenticated}`
  }
});
