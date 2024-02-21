import ROUTER from "./Router";
export const fetchDataIRs = async (locale: string) => {
  const res = await fetch(ROUTER.API_IR.GET_INFORMATIONBYLOCALE(locale));
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
