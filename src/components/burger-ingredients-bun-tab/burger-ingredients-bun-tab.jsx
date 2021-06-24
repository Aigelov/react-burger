import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";

export const BurgerIngredientsBunTab = ({
  tabRef,
  ingredients,
  ingredientClickHandler,
}) => {
  const buns = ingredients.filter((item) => item.type === "bun");

  return (
    <BurgerIngredientsCard
      title="Булки"
      data={buns}
      tabRef={tabRef}
      ingredientClickHandler={ingredientClickHandler}
    />
  );
};
