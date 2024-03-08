// import dotenv from "dotenv";

// Load biến môi trường từ file .env
// dotenv.config();

const HOST = process.env.HOST || "http://localhost:1337";

// const HOST = "https://deliv-api-production.up.railway.app";
const API_PRODUCT = {
  GET_PRODUCTS: `${HOST}/api/projects`,
  GET_PRODUCTSBYLOCALE: (locale: string) => {
    return `${HOST}/api/projects?populate=*&locale=${locale}`;
  },
};

const API_COMPANY = {
  GET_COMPANYBYLOCALE: (locale: string) => {
    return `${HOST}/api/company-profiles?populate=*&locale=${locale}`;
  },
};

const API_PERSON = {
  GET_PERSON: (locale: string) => {
    return `${HOST}/api/people?locale=${locale}`;
  },
};

const API_NEWS = {
  GET_NEWS: `${HOST}/api/news`,
  GET_GET_NEWSBYLOCALE: (locale: string) => {
    return `${HOST}/api/news?populate=*&locale=${locale}`;
  },
};

const API_IR = {
  GET_IRS: `${HOST}/api/irs`,
  GET_INFORMATIONBYLOCALE: (locale: string) => {
    return `${HOST}/api/irs?populate=*&locale=${locale}`;
  },
};

export default {
  API_PERSON,
  API_COMPANY,
  API_PRODUCT,
  API_NEWS,
  API_IR,
};
