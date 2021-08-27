import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  getFridge() {
    return httpClient.get(`/fridge`).then(response => response);
  },
  updateFridge(fridgeId, category, itemList) {
    return service
      .patch(`/fridge/${fridgeId}?category=${category}`, itemList)
      .then(response => response.data);
  },
  addIngredient(fridgeId, newItem) {
    return service
      .patch(`/fridge/${fridgeId}/add`, { newItem: newItem })
      .then(response => response.data);
  },
  createFridge() {
    return service.post(`/fridge`).then(response => response.data);
  }
};
