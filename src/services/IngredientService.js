// import httpClient from "@/utils/httpClient";
import axios from "axios";

let client = axios.create({
  baseURL: "http://localhost:4000" // adresa backenda
  // timeout: 10000 // "1s da poziv prema backendu uspije, više od toga ne čeka"
});

export default {
  getAllIngredients() {
    return client.get("/ingredients").then(response => response.data);
  }
  // getBySlug(slug) {
  //     return axios
  //         .get(url + `subject/${slug}`)
  //         .then(response => response.data.data.subject)
  // }
};
