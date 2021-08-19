import httpClient from "@/utils/httpClient";
import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:4000"
});

export default {
  getWeeklyPlan(user, startDay) {
    return httpClient
      .get(`/weeklyPlan?userId=${user}&startDay=${startDay}`)
      .then(response => response);
  },
  createWeeklyPlan(user, startDay) {
    return httpClient
      .post(`/weeklyPlan?userId=${user}&startDay=${startDay}`)
      .then(response => response);
  },
  createGroceryList(planId) {
    return httpClient
      .post(`/weeklyPlan/${planId}/confirmPlan`)
      .then(response => response);
  }
};
