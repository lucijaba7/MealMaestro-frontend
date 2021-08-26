import service from "@/utils/service";

export default {
  getAllIngredients() {
    return service.get("/ingredients").then(response => response.data);
  }
  // getBySlug(slug) {
  //     return axios
  //         .get(url + `subject/${slug}`)
  //         .then(response => response.data.data.subject)
  // }
};
