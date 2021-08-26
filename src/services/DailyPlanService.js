import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  deleteMeal(dailyPlanId, mealPlanId) {
    return service.patch(
      `/dailyPlan/${dailyPlanId}/remove?mealPlanId=${mealPlanId}`
    );
  },
  addMeal(dailyPlanId, recipeId) {
    return httpClient.patch(
      `/dailyPlan/${dailyPlanId}/add?recipeId=${recipeId}`
    );
  },
  cookMeal(dailyPlanId, mealPlanId) {
    return service
      .patch(`/dailyPlan/${dailyPlanId}/cook?mealPlanId=${mealPlanId}`)
      .then(response => response.data);
  }
};
