import httpClient from "@/utils/httpClient";

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
    return httpClient.get(`/users/customRecipes`).then(response => response);
  },
  getSavedRecipes() {
    return httpClient.get(`/users/savedRecipes`).then(response => response);
  },
  getCustomRecipesByMealType(mealType) {
    return httpClient
      .get(`/users/customRecipes?mealType=${mealType}`)
      .then(response => response);
  },
  getSavedRecipesByMealType(mealType) {
    return httpClient
      .get(`/users/savedRecipes?mealType=${mealType}`)
      .then(response => response);
  }
};
