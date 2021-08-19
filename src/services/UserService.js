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
  getCustomRecipes(mealType) {
    return httpClient
      .get(`users/customRecipes?mealType=${mealType}`)
      .then(response => response);
  },
  getSavedRecipes(mealType) {
    return httpClient
      .get(`users/savedRecipes?mealType=${mealType}`)
      .then(response => response);
  }
};
