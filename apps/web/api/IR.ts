import ROUTER from "./Router";
export const fetchDataIRs = async () => {
  const res = await fetch(ROUTER.API_IR.GET_IRS);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else return null;
};
