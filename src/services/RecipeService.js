import httpClient from "@/utils/httpClient";

export default {
  getRecipeImage(data) {
    return httpClient
      .post("/recipes/getImageUrl", data)
      .then(response => response);
  },
  saveRecipeData(data) {
    return httpClient.post("/recipes", data).then(response => response);
  }
};
