import React from "react";
import BurgerIngredientsTabsContentStyles from "./burger-ingredients-tabs-content.module.css";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";
import PropTypes from "prop-types";
import { BurgerIngredientPropTypes } from "../../prop-types";

export const BurgerIngredientsTabsContent = ({
  bunRef,
  sauceRef,
  mainRef,
  ingredients,
  ingredientClickHandler,
}) => {
  const tabContentStyle = `${BurgerIngredientsTabsContentStyles.tabContent} pr-3`;

  const buns = ingredients.filter((item) => item.type === "bun");
  const sauce = ingredients.filter((item) => item.type === "sauce");
  const main = ingredients.filter((item) => item.type === "main");

  const tabsContent = [
    {
      title: "Булки",
      ingredients: buns,
      tabRef: bunRef,
    },
    {
      title: "Соусы",
      ingredients: sauce,
      tabRef: sauceRef,
    },
    {
      title: "Начинки",
      ingredients: main,
      tabRef: mainRef,
    },
  ];

  return (
    <div className={tabContentStyle}>
      {tabsContent.map((item) => (
        <BurgerIngredientsCard
          key={item.title}
          title={item.title}
          ingredients={item.ingredients}
          tabRef={item.tabRef}
          ingredientClickHandler={ingredientClickHandler}
        />
      ))}
    </div>
  );
};

BurgerIngredientsTabsContent.propTypes = {
  bunRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape(BurgerIngredientPropTypes))
    .isRequired,
  ingredientClickHandler: PropTypes.func.isRequired,
};
