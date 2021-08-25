import httpClient from "@/utils/httpClient";
import axios from "axios";
import { store } from "../store";

let Service = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${store.getters.isAuthenticated}`
  }
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
    return Service.patch(`/users/customRecipes/remove?recipeId=${id}`);
  },
  removeFromSavedRecipes(id) {
    return Service.patch(`/users/savedRecipes/remove?recipeId=${id}`);
  },
  saveRecipe(id) {
    return Service.patch(`/users/savedRecipes?recipeId=${id}`);
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
    return Service.patch(`/users/followUser?userId=${id}`).then(
      response => response.data
    );
  },
  unfollowUser(id) {
    return Service.patch(`/users/unfollowUser?userId=${id}`).then(
      response => response.data
    );
  },
  countFollowers(id) {
    return Service.get(`/users/getFollowersNumber?userId=${id}`).then(
      response => response.data
    );
  }
};
