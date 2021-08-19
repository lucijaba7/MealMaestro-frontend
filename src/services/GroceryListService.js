import httpClient from "@/utils/httpClient";
import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:4000"
});

export default {
  getGroceryList(userId) {
    return httpClient
      .get(`/groceryList?userId=${userId}`)
      .then(response => response);
  }
};
