import React from "react";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { constructBurger, constructBurgerCrust } from "./construct-burger";
import IngredientsStyles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerConstructor = () => {
  const ingredientStyle = `${IngredientsStyles.ingredients} mt-25 ml-5`;
  const bottomStyles = `${IngredientsStyles.bottom} mr-3 mt-10`;

  return (
    <section className={ingredientStyle}>
      <BurgerConstructorItem {...constructBurgerCrust("top")} />

      <div className={IngredientsStyles.middle}>
        {constructBurger().map((ingredient) => (
          <BurgerConstructorItem key={ingredient.text} {...ingredient} />
        ))}
      </div>

      <BurgerConstructorItem {...constructBurgerCrust("bottom")} />

      <span className={bottomStyles}>
        <span className="text text_type_digits-medium">610</span>
        <span className="ml-2 mr-10 mt-1">
          <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </span>
    </section>
  );
};
