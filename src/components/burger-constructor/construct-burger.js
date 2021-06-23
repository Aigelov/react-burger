import { burgerIngredientsData } from "../utils/data";

export const constructBurgerCrust = (type) => {
  const burgerIngredient = burgerIngredientsData.find(
    (item) => item.type === "bun" && item.counter > 0
  );

  return {
    type: type,
    isLocked: true,
    text: burgerIngredient?.name,
    price: burgerIngredient?.price,
    thumbnail: burgerIngredient?.image,
  };
};

export const constructBurger = () => {
  return burgerIngredientsData
    .filter((item) => item.counter > 0 && item.type !== "bun")
    .map((item) => ({
      text: item?.name,
      price: item?.price,
      thumbnail: item?.image,
    }));
};
