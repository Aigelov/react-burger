import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { constructBurger, constructBurgerCrust } from "./construct-burger";
import IngredientsStyles from "./burger-constructor.module.css";
import { BurgerIngredientPropTypes } from "../../prop-types";
import { OrderButton } from "../order-button/order-button";

export const BurgerConstructor = ({ ingredients }) => {
  const ingredientStyle = `${IngredientsStyles.ingredients} mt-25 ml-5`;
  const bottomStyles = `${IngredientsStyles.bottom} mr-3 mt-10 pb-5`;

  if (!ingredients.length) {
    return null;
  }

  return (
    <section className={ingredientStyle}>
      <BurgerConstructorItem {...constructBurgerCrust(ingredients, "top")} />

      <div className={IngredientsStyles.middle}>
        {constructBurger(ingredients).map((ingredient) => (
          <BurgerConstructorItem key={ingredient._id} {...ingredient} />
        ))}
      </div>

      <BurgerConstructorItem {...constructBurgerCrust(ingredients, "bottom")} />

      <span className={bottomStyles}>
        <span className="text text_type_digits-medium">610</span>
        <span className="ml-2 mr-10 mt-1">
          <CurrencyIcon type="primary" />
        </span>
        <OrderButton />
      </span>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(BurgerIngredientPropTypes))
    .isRequired,
};
