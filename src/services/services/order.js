import { getCookie } from "../helpers-cookie";

const ORDERS_URL = "https://norma.nomoreparties.space/orders/all";

export const findAllOrders = async () => {
  return await new Promise(async (resolve, reject) => {
    const res = await fetch(ORDERS_URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    if (!res.ok) {
      reject("ERROR network answer was not ok");
    }

    const response = await res.json();
    resolve(response);
  });
};
