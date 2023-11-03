import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: { projectId: "wu84jw08nhnb" },
  timeout: 10000,
  page: 2,
  limit: 20,
});

export default axiosInstance;
