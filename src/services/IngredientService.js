import service from "@/utils/service";

export default {
  getAllIngredients() {
    return service.get("/ingredients").then(response => response.data);
  }
};
