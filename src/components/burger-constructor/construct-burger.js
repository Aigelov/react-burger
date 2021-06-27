export const constructBurgerCrust = (ingredients, type) => {
  const burgerIngredient = ingredients.find((item) => item.type === "bun");

  return {
    type: type,
    isLocked: true,
    _id: burgerIngredient?._id,
    text: burgerIngredient?.name,
    price: burgerIngredient?.price,
    thumbnail: burgerIngredient?.image,
  };
};

export const constructBurger = (ingredients) => {
  return ingredients
    .filter((item) => item.type !== "bun")
    .map((item) => ({
      _id: item?._id,
      text: item?.name,
      price: item?.price,
      thumbnail: item?.image,
    }));
};
