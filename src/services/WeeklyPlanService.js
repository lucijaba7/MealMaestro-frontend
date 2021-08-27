import httpClient from "@/utils/httpClient";

export default {
  getWeeklyPlan(startDay) {
    return httpClient
      .get(`/weeklyPlan?startDay=${startDay}`)
      .then(response => response);
  },
  createWeeklyPlan(startDay) {
    return httpClient
      .post(`/weeklyPlan?startDay=${startDay}`)
      .then(response => response);
  },
  createGroceryList(planId) {
    return httpClient
      .post(`/weeklyPlan/${planId}/confirmPlan`)
      .then(response => response);
  }
};
