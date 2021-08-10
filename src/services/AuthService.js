import axios from "axios";

const url = "http://localhost:4000/users/";

export default {
  signup(data) {
    return axios.post(url + "signup/", data).then(response => response.data);
  },
  login(credentials) {
    return axios
      .post(url + "login/", credentials)
      .then(response => response.data);
  }
};
