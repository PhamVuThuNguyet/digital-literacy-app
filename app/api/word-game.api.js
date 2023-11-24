import axiosClient from "../config/axios.conf";

const wordGameApi = {
  getWordGame: () => {
    return axiosClient.get("/words");
  },
};

export default wordGameApi;
