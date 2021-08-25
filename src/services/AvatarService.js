import service from "@/utils/service";

export default {
  getAllAvatars() {
    return service.get("avatars").then(response => response.data);
  }
};
