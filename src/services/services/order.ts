import { getCookie } from "../helpers-cookie";

const CHECKOUT_ORDER_URL = "https://norma.nomoreparties.space/api/orders";

export const checkoutOrderFetch = async (ingredientIDs: string[]) => {
  const body = JSON.stringify({
    ingredients: ingredientIDs,
  });

  const response = await fetch(CHECKOUT_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
};
