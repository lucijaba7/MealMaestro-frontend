import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  getFridge(userId) {
    return httpClient
      .get(`/fridge?userId=${userId}`)
      .then(response => response);
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
  }
};
