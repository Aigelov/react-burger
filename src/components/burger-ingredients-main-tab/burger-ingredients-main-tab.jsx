import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";

export const BurgerIngredientsMainTab = ({
  tabRef,
  ingredients,
  ingredientClickHandler,
}) => {
  const main = ingredients.filter((item) => item.type === "main");

  return (
    <BurgerIngredientsCard
      title="Начинки"
      data={main}
      tabRef={tabRef}
      ingredientClickHandler={ingredientClickHandler}
    />
  );
};
