import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";
import { burgerIngredientsData } from "../utils/data";

export const BurgerIngredientsBunTab = ({ tabRef }) => {
  const buns = burgerIngredientsData.filter((item) => item.type === "bun");

  return <BurgerIngredientsCard title="Булки" data={buns} tabRef={tabRef} />;
};
