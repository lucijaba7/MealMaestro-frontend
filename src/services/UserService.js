import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

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
  getCustomRecipes(start, end) {
    return httpClient
      .get(`/users/customRecipes?start=${start}&end=${end}`)
      .then(response => response);
  },
  getSavedRecipes(start, end) {
    return httpClient
      .get(`/users/savedRecipes?start=${start}&end=${end}`)
      .then(response => response);
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
  },
  removeFromYourRecipes(id) {
    return service.patch(`/users/customRecipes/remove?recipeId=${id}`);
  },
  removeFromSavedRecipes(id) {
    return service.patch(`/users/savedRecipes/remove?recipeId=${id}`);
  },
  saveRecipe(id) {
    return service.patch(`/users/savedRecipes?recipeId=${id}`);
  },
  getUserData(username) {
    return httpClient.get(`/users/${username}`).then(response => response);
  },
  getUserRecipes(username) {
    return httpClient
      .get(`/users/${username}/customRecipes`)
      .then(response => response);
  },
  followUser(id) {
    return service
      .patch(`/users/followUser?userId=${id}`)
      .then(response => response.data);
  },
  unfollowUser(id) {
    return service
      .patch(`/users/unfollowUser?userId=${id}`)
      .then(response => response.data);
  },
  countFollowers(id) {
    return service
      .get(`/users/getFollowersNumber?userId=${id}`)
      .then(response => response.data);
  }
};
