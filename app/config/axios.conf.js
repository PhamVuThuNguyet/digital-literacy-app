import axios from "axios";
import AsyncStorageService from "../services/async-storage.service.js";
import { API_URL } from "@env";

const axiosClient = axios.create({
  baseURL: `http://3.0.57.99:3001/api/v1`,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorageService.getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && originalRequest._retry) {
      return Promise.reject(error);
    } else if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { data } = await axiosClient.post("/auth/refresh");
      const accessToken = data?.access_token;
      await AsyncStorageService.setToken({ accessToken });
      axiosClient.defaults.headers.common["Authorization"] =
        "Bearer " + res.data.accessToken;
      return axiosClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
