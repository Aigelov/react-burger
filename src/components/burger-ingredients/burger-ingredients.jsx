import React, { useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerBuilderStyles from "./burger-ingredients.module.css";
import { BurgerIngredientsMainTab } from "../burger-ingredients-main-tab/burger-ingredients-main-tab";
import { BurgerIngredientsSauceTab } from "../burger-ingredients-sauce-tab/burger-ingredients-sauce-tab";
import { BurgerIngredientsBunTab } from "../burger-ingredients-bun-tab/burger-ingredients-bun-tab";

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState("roll");
  const rollRef = useRef(null);
  const sauceRef = useRef(null);
  const fillingRef = useRef(null);

  const burgerBuilderStyle = `${BurgerBuilderStyles.burgerBuilder} mt-10 mr-5`;
  const tabStyle = `${BurgerBuilderStyles.tabs} mb-10`;
  const tabContentStyle = `${BurgerBuilderStyles.tabContent} pr-3`;

  const tabClickHandler = (tab, tabRef) => {
    setCurrent(tab);
    tabRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className={burgerBuilderStyle}>
      <p className="text text_type_main-large mb-5">Соберите бургер</p>

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

      <div className={tabContentStyle}>
        <BurgerIngredientsBunTab tabRef={rollRef} />
        <BurgerIngredientsSauceTab tabRef={sauceRef} />
        <BurgerIngredientsMainTab tabRef={fillingRef} />
      </div>
    </section>
  );
};
