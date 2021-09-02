import { generateKey } from "../utils/generateUniqueKey";
import { IBurgerIngredient } from "./models";

export const addIngredient = (
  ingredient: IBurgerIngredient,
  ingredients: IBurgerIngredient[]
) => {
  const newIngredient = [
    {
      ...ingredient,
      uniqueID: generateKey(ingredient._id),
    },
  ];
  let newIngredients = [...ingredients];

  if (ingredient.type === "bun") {
    // При добавлении булки в бургер, она сразу добавляется и в верх, и в низ бургера.
    newIngredient.push({
      ...ingredient,
      uniqueID: generateKey(ingredient._id, 100),
    });

    // При добавлении другой булки в бургер, она заменяет существующую булку, если таковая есть,
    // при этом сразу и верх, и низ бургера, то есть в бургере может быть всего 2 булки, вверху и внизу.
    newIngredients = ingredients.filter((item) => item.type !== "bun");
  }

  // Новые ингредиенты добавляются в начало массива
  return newIngredient.concat(newIngredients);
};

export const removeIngredient = (
  ingredient: IBurgerIngredient,
  ingredients: IBurgerIngredient[]
) => {
  return ingredients.filter((item) => item.uniqueID !== ingredient.uniqueID);
};

export const increaseCount = (
  ingredient: IBurgerIngredient,
  ingredients: IBurgerIngredient[]
) => {
  return ingredients.map((item) => {
    let counter = 1;

    // При добавлении булки в бургер, она сразу добавляется и в верх, и в низ бургера.
    if (ingredient.type === "bun") {
      counter = 2;
      delete item.count;
    }

    if (item._id === ingredient._id) {
      if (!item.count) {
        item.count = counter;
      } else {
        item.count += counter;
      }
    }

    return item;
  });
};

export const decreaseCount = (
  ingredient: IBurgerIngredient,
  ingredients: IBurgerIngredient[]
) => {
  return ingredients.map((item) => {
    const counter = 1;

    if (item._id === ingredient._id) {
      if (item.count === counter) {
        delete item.count;
      } else if (item.count && item.count > counter) {
        item.count -= counter;
      }
    }

    return item;
  });
};

export const removeEmptyParams = (params: any) => {
  const newParams = { ...params };

  for (const key in newParams) {
    if (!newParams[key]) {
      delete newParams[key];
    }
  }

  return newParams;
};
