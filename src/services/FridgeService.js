import httpClient from "@/utils/httpClient";
import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:4000"
});

export default {
  getFridge(userId) {
    return httpClient
      .get(`/fridge?userId=${userId}`)
      .then(response => response);
  },
  updateFridge(fridgeId, category, itemList) {
    return Service.patch(
      `/fridge/${fridgeId}?category=${category}`,
      itemList
    ).then(response => response.data);
  },
  addIngredient(fridgeId, newItem) {
    return Service.patch(`/fridge/${fridgeId}/add`, { newItem: newItem }).then(
      response => response.data
    );
  },
  createFridge() {
    return Service.post(`/fridge`).then(response => response.data);
  }
};
