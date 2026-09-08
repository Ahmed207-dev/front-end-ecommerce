import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://back-end-ecommerce-lyart.vercel.app/",
});

export default baseUrl;
