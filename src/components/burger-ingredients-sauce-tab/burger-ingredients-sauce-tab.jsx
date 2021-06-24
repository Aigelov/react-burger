import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";

export const BurgerIngredientsSauceTab = ({
  tabRef,
  ingredients,
  ingredientClickHandler,
}) => {
  const sauce = ingredients.filter((item) => item.type === "sauce");

  return (
    <BurgerIngredientsCard
      title="Соусы"
      data={sauce}
      tabRef={tabRef}
      ingredientClickHandler={ingredientClickHandler}
    />
  );
};
