import axios from "axios";

const url = "http://localhost:4000/avatars/";

export default {
  getAllAvatars() {
    return axios.get(url).then(response => response.data);
  }
};
