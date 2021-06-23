import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";
import { burgerIngredientsData } from "../utils/data";

export const BurgerIngredientsSauceTab = ({ tabRef }) => {
  const sauce = burgerIngredientsData.filter((item) => item.type === "sauce");

  return <BurgerIngredientsCard title="Соусы" data={sauce} tabRef={tabRef} />;
};
