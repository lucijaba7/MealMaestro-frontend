import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  getGroceryList() {
    return httpClient.get(`/groceryList`).then(response => response);
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
