import axios from "axios";

const url = "http://localhost:4000/users/";

export default {
  signup(data) {
    return axios.post(url + "signup/", data).then(response => response.data);
  },
  async login(credentials) {
    let response = await axios
      .post(url + "login/", credentials)
      .then(response => response.data);

    let user = response.data;
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user")); //user je string a nama treba objekt
  }
};
