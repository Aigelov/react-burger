import { getCookie } from "../helpers-cookie";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";

export const findAllIngredients = async () => {
  return await new Promise(async (resolve, reject) => {
    const res = await fetch(INGREDIENTS_URL, {
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
