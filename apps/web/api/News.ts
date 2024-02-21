import ROUTER from "./Router";
export const fetchDataNews = async (locale: string) => {
  const res = await fetch(ROUTER.API_NEWS.GET_GET_NEWSBYLOCALE(locale));
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
