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
  getAllRecipes() {
    return httpClient.get("/recipes").then(response => response);
  },
  getCustomRecipes(id) {
    return httpClient
      .get(`/recipes/${id}/customRecipes`)
      .then(response => response);
  }
};
