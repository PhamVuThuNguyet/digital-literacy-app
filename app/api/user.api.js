import axiosClient from "../config/axios.conf";

const userApi = {
  getUserProfile: (id) => {
    return axiosClient.get("/users/" + id);
  },
  updateUserProfile: (id, data) => {
    return axiosClient.patch("/users/" + id, data);
  },
};

export default userApi;
