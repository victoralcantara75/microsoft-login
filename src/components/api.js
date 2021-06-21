import axios from "axios";

const api = axios.create({
    baseURL: "https://db-fishing-server.herokuapp.com/",
});
  
export default api;