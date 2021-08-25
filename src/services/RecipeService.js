import httpClient from "@/utils/httpClient";

export default {
  getRecipeImage(data) {
    return httpClient
      .post("/recipes/getImageUrl", data)
      .then(response => response);
  },
  saveRecipeData(data) {
    return httpClient.post("/recipes", data).then(response => response);
  },
  getAllRecipes(mealType) {
    return httpClient
      .get(`/recipes?mealType=${mealType}`)
      .then(response => response);
  },
  recommendRecipesByMealType(userId, mealType) {
    return httpClient
      .get(`/recipes/recommend?userId=${userId}&mealType=${mealType}`)
      .then(response => response);
  },
  getRecipeById(id) {
    return httpClient.get(`/recipes/${id}`).then(response => response);
  }
};
