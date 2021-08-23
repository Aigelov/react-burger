import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerIngredientsTabsStyles from "./burger-ingredients-tabs.module.css";

export const BurgerIngredientsTabs = ({
  bunRef,
  sauceRef,
  mainRef,
  currentTab,
  tabClickHandler,
}) => {
  const tabStyle = `${BurgerIngredientsTabsStyles.tabs} mb-10`;

  return (
    <div className={tabStyle}>
      <Tab
        value="bun"
        active={currentTab === "bun"}
        onClick={() => tabClickHandler("bun", bunRef)}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={currentTab === "sauce"}
        onClick={() => tabClickHandler("sauce", sauceRef)}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={currentTab === "main"}
        onClick={() => tabClickHandler("main", mainRef)}
      >
        Начинки
      </Tab>
    </div>
  );
};

BurgerIngredientsTabs.propTypes = {
  bunRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
  currentTab: PropTypes.string.isRequired,
  tabClickHandler: PropTypes.func.isRequired,
};
