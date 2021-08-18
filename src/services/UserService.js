import axios from "axios";

// const url = "http://127.0.0.1:4000/users/";
let client = axios.create({
  baseURL: "http://localhost:4000" // adresa backenda
  // timeout: 10000 // "1s da poziv prema backendu uspije, više od toga ne čeka"
});

export default {
  changePassword(data) {
    return client
      .patch("/users/updatePassword/", data)
      .then(response => response.data);
  },
  updateData(data) {
    return client
      .patch("/users/updateMyData/", data)
      .then(response => response.data);
  },
  getCustomRecipes(userId, mealType = null) {
    return client
      .get(`/users/${userId}/customRecipes?mealType=${mealType}`)
      .then(response => response.data);
  },
  getSavedRecipes(userId, mealType = null) {
    return client
      .get(`/users/${userId}/savedRecipes?mealType=${mealType}`)
      .then(response => response.data);
  }
};
