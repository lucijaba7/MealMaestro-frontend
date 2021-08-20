import httpClient from "@/utils/httpClient";
import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:4000"
});

export default {
  changePassword(data) {
    return httpClient
      .patch("users/updatePassword", data)
      .then(response => response);
  },
  updateData(data) {
    return httpClient
      .patch("users/updateMyData", data)
      .then(response => response);
  },
  getCustomRecipes() {
    return httpClient.get("/users/customRecipes").then(response => response);
  },
  getSavedRecipes() {
    return httpClient.get("/users/savedRecipes").then(response => response);
  },
  getCustomRecipesByMealType(mealType) {
    return httpClient
      .get(`/users/customRecipes?mealType=${mealType}`)
      .then(response => response);
  },
  removeFromYourRecipes(id) {
    return httpClient.patch(`/users/customRecipes/remove?recipeId=${id}`);
  },
  removeFromSavedRecipes(id) {
    return httpClient.patch(`/users/savedRecipes/remove?recipeId=${id}`);
  }
};
