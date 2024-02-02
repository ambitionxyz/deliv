// import dotenv from "dotenv";

// Load biến môi trường từ file .env
// dotenv.config();

// const HOST = process.env.HOST || "http://localhost:1337";

const HOST = "https://deliv-api-production.up.railway.app";
const API_PRODUCT = {
  GET_PRODUCTS: `${HOST}/api/projects`,
};

const API_NEWS = {
  GET_NEWS: `${HOST}/api/news`,
};

const API_IR = {
  GET_IRS: `${HOST}/api/irs`,
};

export default {
  API_PRODUCT,
  API_NEWS,
  API_IR,
};
