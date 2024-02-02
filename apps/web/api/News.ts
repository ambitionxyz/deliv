import ROUTER from "./Router";
export const fetchDataNews = async () => {
  const res = await fetch(ROUTER.API_NEWS.GET_NEWS);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
