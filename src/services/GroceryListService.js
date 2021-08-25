import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  getGroceryList(userId) {
    return httpClient
      .get(`/groceryList?userId=${userId}`)
      .then(response => response);
  },
  updateGroceryList(listId, items) {
    return service
      .patch(`/groceryList/${listId}`, items)
      .then(response => response.data);
  },
  confirmGroceryList(listId) {
    return httpClient.post(`/groceryList/${listId}`).then(response => response);
  }
};
