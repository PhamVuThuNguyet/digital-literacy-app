import axiosClient from "../config/axios.conf";

const knowledgeApi = {
  getKnowledge: () => {
    return axiosClient.get("/knowledge");
  },
};

export default knowledgeApi;
