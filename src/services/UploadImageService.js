import axios from "axios";

const url = "http://localhost:4000/ingredients/";

export default {
  getAllIngredients() {
    return axios.get(url).then(response => response.data);
  }
  // getBySlug(slug) {
  //     return axios
  //         .get(url + `subject/${slug}`)
  //         .then(response => response.data.data.subject)
  // }
};
