import axios from "axios";
import { store } from "../store";

export default axios.create({
  baseURL: "https://mealmaestro.herokuapp.com"
});
