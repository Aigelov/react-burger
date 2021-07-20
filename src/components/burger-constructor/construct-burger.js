export const constructBurgerBun = (burgerIngredient, type) => ({
  type: type,
  isLocked: true,
  _id: burgerIngredient?._id,
  uniqueID: burgerIngredient?.uniqueID,
  text: burgerIngredient?.name,
  price: burgerIngredient?.price,
  thumbnail: burgerIngredient?.image,
});

export const constructBurger = (ingredients) => {
  return ingredients
    .filter((item) => item.type !== "bun")
    .map((item) => ({
      _id: item?._id,
      uniqueID: item?.uniqueID,
      text: item?.name,
      price: item?.price,
      thumbnail: item?.image,
    }));
};
