import axios from "axios";

// instanca axiosa
let Service = axios.create({
  baseURL: "http://localhost:4000", // adresa backenda
  timeout: 10000 // "1s da poziv prema backendu uspije, više od toga ne čeka"
});

let Recipes = {
  getDaily(username, startDay, weekDay) {
    return Service.get(
      `/plan/daily?username=${username}&startDay=${startDay}&weekDay=${weekDay}`
    );
  },
  getWeekly(username, startDay) {
    return Service.get(
      `/plan/weekly?username=${username}&startDay=${startDay}`
    );
  }
};

let User = {
  getData(username) {
    return Service.get(`/profile?username=${username}`);
  },
  getSettings(username) {
    // znaci ne znammmm jel ispravno tako
    return Service.get(`/settings?username=${username}`);
  }
};

let Fridge = {
  getItems(category, username) {
    return Service.get(`/fridge/${category}?username=${username}`);
  }
};

let GroceryList = {
  getItems(username, planStart) {
    return Service.get(
      `/groceryList/?username=${username}&startDay=${planStart}`
    );
  }
};

let Ingredients = {
  getItems() {
    return Service.get(`/ingredients`);
  }
};

export { Recipes, User, Fridge, GroceryList, Ingredients };
