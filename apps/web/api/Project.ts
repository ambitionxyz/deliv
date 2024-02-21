import ROUTER from "./Router";
export const fetchDataProjects = async (locale: string) => {
  const res = await fetch(ROUTER.API_PRODUCT.GET_PRODUCTSBYLOCALE(locale));
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};

export const fetchDataCompanys = async (locale: string) => {
  const res = await fetch(ROUTER.API_COMPANY.GET_COMPANYBYLOCALE(locale));
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};

export const fetchDataPersons = async (locale: string) => {
  const res = await fetch(ROUTER.API_PERSON.GET_PERSON(locale));
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
