import ROUTER from "./Router";
export const fetchDataProjects = async () => {
  const res = await fetch(ROUTER.API_PRODUCT.GET_PRODUCTS);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
