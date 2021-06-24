import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsTabsStyles from "./burger-ingredients-tabs.module.css";

export const BurgerIngredientsTabs = ({ rollRef, sauceRef, fillingRef }) => {
  const [current, setCurrent] = useState("roll");

  const tabStyle = `${BurgerIngredientsTabsStyles.tabs} mb-10`;

  const tabClickHandler = (tab, tabRef) => {
    setCurrent(tab);
    tabRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <span className={tabStyle}>
      <Tab
        value="roll"
        active={current === "roll"}
        onClick={() => tabClickHandler("roll", rollRef)}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={current === "sauce"}
        onClick={() => tabClickHandler("sauce", sauceRef)}
      >
        Соусы
      </Tab>
      <Tab
        value="filling"
        active={current === "filling"}
        onClick={() => tabClickHandler("filling", fillingRef)}
      >
        Начинки
      </Tab>
    </span>
  );
};
