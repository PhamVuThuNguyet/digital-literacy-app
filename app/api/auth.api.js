import axiosClient from "../config/axios.conf";

const authApi = {
  login: (data) => {
    return axiosClient.post("/auth/login", data);
  },

  register: (data) => {
    return axiosClient.post("/auth/register", data);
  },
};

export default authApi;
export const { login, register } = authApi;
