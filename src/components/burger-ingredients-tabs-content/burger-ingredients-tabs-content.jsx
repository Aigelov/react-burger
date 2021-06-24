import React from "react";
import { BurgerIngredientsBunTab } from "../burger-ingredients-bun-tab/burger-ingredients-bun-tab";
import { BurgerIngredientsSauceTab } from "../burger-ingredients-sauce-tab/burger-ingredients-sauce-tab";
import { BurgerIngredientsMainTab } from "../burger-ingredients-main-tab/burger-ingredients-main-tab";
import BurgerIngredientsTabsContentStyles from "./burger-ingredients-tabs-content.module.css";

export const BurgerIngredientsTabsContent = ({
  rollRef,
  sauceRef,
  fillingRef,
  ingredients,
  ingredientClickHandler,
}) => {
  const tabContentStyle = `${BurgerIngredientsTabsContentStyles.tabContent} pr-3`;

  return (
    <div className={tabContentStyle}>
      <BurgerIngredientsBunTab
        tabRef={rollRef}
        ingredients={ingredients}
        ingredientClickHandler={ingredientClickHandler}
      />
      <BurgerIngredientsSauceTab
        tabRef={sauceRef}
        ingredients={ingredients}
        ingredientClickHandler={ingredientClickHandler}
      />
      <BurgerIngredientsMainTab
        tabRef={fillingRef}
        ingredients={ingredients}
        ingredientClickHandler={ingredientClickHandler}
      />
    </div>
  );
};
