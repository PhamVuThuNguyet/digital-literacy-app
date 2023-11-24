import axiosClient from "../config/axios.conf";

const questionApi = {
  getQuestions: () => {
    return axiosClient.get("/questions");
  },
};

export default questionApi;
