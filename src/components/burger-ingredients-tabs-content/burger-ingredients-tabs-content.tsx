import React, { FC } from "react";
import BurgerIngredientsTabsContentStyles from "./burger-ingredients-tabs-content.module.css";
import { BurgerIngredientsCard } from "../burger-ingredients-card/burger-ingredients-card";
import { useSelector } from "../../services/hooks";
import {
  IBurgerIngredient,
  IBurgerIngredientsTabsContent,
} from "../../services/models";

export const BurgerIngredientsTabsContent: FC<IBurgerIngredientsTabsContent> =
  ({
    bunRef,
    sauceRef,
    mainRef,
    ingredientClickHandler,
    scrollContainerRef,
    handleScroll,
  }) => {
    const ingredients: IBurgerIngredient[] = useSelector(
      ({ burger }) => burger.ingredients
    );

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
      <div
        className={BurgerIngredientsTabsContentStyles.tabContent}
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
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
