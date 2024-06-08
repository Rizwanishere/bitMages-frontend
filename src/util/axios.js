import axios from "axios";

const getInstance = () => {
  const baseURL = "https://cgc-nodejs.onrender.com";
  const token = localStorage.getItem("token");

  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return axios.create({
    baseURL,
    headers,
  });
};

export default getInstance;