import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  getRecipeImage(data) {
    return httpClient
      .post("/recipes/getImageUrl", data)
      .then(response => response);
  },
  saveRecipeData(data) {
    return httpClient.post("/recipes", data).then(response => response);
  },
  getAllRecipes() {
    return httpClient.get(`/recipes`).then(response => response);
  },
  recommendRecipesByMealType(mealType, offset) {
    return httpClient
      .get(`/recipes/recommend?mealType=${mealType}&offset=${offset}`)
      .then(response => response);
  },
  getRecipeById(id) {
    return httpClient.get(`/recipes/${id}`).then(response => response);
  },
  rateRecipe(id, data) {
    return service
      .patch(`/recipes/${id}/rating`, data)
      .then(response => response.data);
  },
  getRating(id) {
    return service.get(`/recipes/${id}/rating`).then(response => response.data);
  }
};
