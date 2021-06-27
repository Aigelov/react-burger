import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import CardItemStyles from "./burger-ingredients-card-item.module.css";
import { BurgerIngredientPropTypes } from "../../prop-types";

export const BurgerIngredientsCardItem = ({
  _id,
  name,
  price,
  image,
  ingredientClickHandler,
  ...others
}) => {
  const cardStyle = `${CardItemStyles.card} mb-8`;
  const currencyIconStyle = `${CardItemStyles.currencyIcon} ml-2`;

  return (
    <article className={cardStyle} onClick={() => ingredientClickHandler(_id)}>
      <span className="ml-3 mr-3">
        <Counter count={1} size="default" />
        <img src={image} alt={name} width="100%" />
        <div className="pt-1 pb-1">
          <span className="text text_type_main-medium">{price}</span>
          <span className={currencyIconStyle}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <span>{name}</span>
      </span>
    </article>
  );
};

BurgerIngredientsCardItem.propTypes = {
  ...BurgerIngredientPropTypes,
  ingredientClickHandler: PropTypes.func.isRequired,
};
