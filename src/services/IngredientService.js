import httpClient from "@/utils/httpClient";

export default {
  getAllIngredients() {
    return httpClient.get("/ingredients").then(response => response);
  }
  // getBySlug(slug) {
  //     return axios
  //         .get(url + `subject/${slug}`)
  //         .then(response => response.data.data.subject)
  // }
};
