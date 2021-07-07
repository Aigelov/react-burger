import React, { useContext } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { constructBurger, constructBurgerBun } from "./construct-burger";
import IngredientsStyles from "./burger-constructor.module.css";
import { OrderButton } from "../order-button/order-button";
import { BurgerContext } from "../services/BurgerContext";
import { TotalPrice } from "../total-price/total-price";

export const BurgerConstructor = () => {
  const { selectedIngredients: ingredients } = useContext(BurgerContext);
  const bunIngredient = ingredients.find((item) => item.type === "bun");

  const ingredientStyle = `${IngredientsStyles.ingredients} mt-25 ml-5`;
  const bottomStyles = `${IngredientsStyles.bottom} mr-3 mt-10 pb-5`;

  if (!ingredients.length) {
    return null;
  }

  return (
    <section className={ingredientStyle}>
      <BurgerConstructorItem {...constructBurgerBun(bunIngredient, "top")} />

      <div className={IngredientsStyles.middle}>
        {constructBurger(ingredients).map((ingredient, index) => (
          <BurgerConstructorItem key={ingredient._id + index} {...ingredient} />
        ))}
      </div>

      <BurgerConstructorItem {...constructBurgerBun(bunIngredient, "bottom")} />

      <span className={bottomStyles}>
        <TotalPrice />
        <span className="ml-2 mr-10 mt-1">
          <CurrencyIcon type="primary" />
        </span>
        <OrderButton />
      </span>
    </section>
  );
};
