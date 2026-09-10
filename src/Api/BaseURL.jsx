import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://back-end-ecommerce-uly1.onrender.com/",
});

export default baseUrl;
