import axios from "axios";

const url = "http://127.0.0.1:4000/users/";

export default {
  signup(data) {
    return axios.post(url + "signup/", data).then(response => response.data);
  },
  login(credentials) {
    return axios
      .post(url + "login/", credentials)
      .then(response => response.data);

    // let user = response.data;
    // console.log(user);
    // localStorage.setItem("user", JSON.stringify(user));
    // return true;
  }
};
