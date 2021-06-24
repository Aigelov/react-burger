export const constructBurgerCrust = (ingredients, type) => {
  const burgerIngredient = ingredients.find((item) => item.type === "bun");

  return {
    type: type,
    isLocked: true,
    _id: burgerIngredient?._id,
    text: burgerIngredient?.name,
    price: burgerIngredient?.price,
    thumbnail: burgerIngredient?.image,
    // largeImage: burgerIngredient?.image_large,
    // calories: burgerIngredient?.calories,
    // carbohydrates: burgerIngredient?.carbohydrates,
    // fat: burgerIngredient?.fat,
    // proteins: burgerIngredient?.proteins,
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
      // largeImage: item?.image_large,
      // calories: item?.calories,
      // carbohydrates: item?.carbohydrates,
      // fat: item?.fat,
      // proteins: item?.proteins,
    }));
};
