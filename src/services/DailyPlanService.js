import httpClient from "@/utils/httpClient";
import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:4000"
});

export default {
  deleteMeal(dailyPlanId, mealPlanId) {
    return Service.patch(
      `/dailyPlan/${dailyPlanId}/remove?mealPlanId=${mealPlanId}`
    );
  },
  addMeal(dailyPlanId, recipeId) {
    return httpClient.patch(
      `/dailyPlan/${dailyPlanId}/add?recipeId=${recipeId}`
    );
  },
  cookMeal(dailyPlanId, mealPlanId) {
    return Service.patch(
      `/dailyPlan/${dailyPlanId}/cook?mealPlanId=${mealPlanId}`
    ).then(response => response.data);
  }
};

//// zasto negdje saljem kao podatke a u cookMeal id kao?? nes zabrijavam ja
