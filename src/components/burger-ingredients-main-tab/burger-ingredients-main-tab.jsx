import React from "react";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";
import { burgerIngredientsData } from "../utils/data";

export const BurgerIngredientsMainTab = ({ tabRef }) => {
  const main = burgerIngredientsData.filter((item) => item.type === "main");

  return <BurgerIngredientsCard title="Начинки" data={main} tabRef={tabRef} />;
};
