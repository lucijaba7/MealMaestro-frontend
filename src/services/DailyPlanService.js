import httpClient from "@/utils/httpClient";
import service from "@/utils/service";

export default {
  deleteMeal(dailyPlanId, mealPlanId) {
    return service.patch(`/dailyPlan/${dailyPlanId}/remove`, {
      mealPlanId: mealPlanId
    });
  },
  addMeal(dailyPlanId, recipeId) {
    return httpClient.patch(`/dailyPlan/${dailyPlanId}/add`, {
      recipeId: recipeId
    });
  },
  cookMeal(dailyPlanId, recipeId) {
    return service
      .patch(`/dailyPlan/${dailyPlanId}/cook?recipeId=${recipeId}`)
      .then(response => response.data);
  }
};

//// zasto negdje saljem kao podatke a u cookMeal id kao?? nes zabrijavam ja
