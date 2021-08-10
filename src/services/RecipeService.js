import axios from "axios";

const url = "http://localhost:4000/recipes/";

export default {
  saveRecipe(data) {
    return axios.post(`${url}`, data).then(response => response.data);
  },
  getAllRecipes() {
    return axios.get(url).then(response => response.data);
  },
  getOneRecipe() {
    //
  }
};
