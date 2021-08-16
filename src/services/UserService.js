import axios from "axios";

const url = "http://127.0.0.1:4000/users/";

export default {
  changePassword(data) {
    return axios
      .patch(url + "updatePassword/", data)
      .then(response => response.data);
  },
  updateData(data) {
    return axios
      .patch(url + "updateMyData/", data)
      .then(response => response.data);
  }
};
