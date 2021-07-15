import React from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import CardItemStyles from "./burger-ingredients-card-item.module.css";
import { BurgerIngredientPropTypes } from "../../prop-types";

export const BurgerIngredientsCardItem = ({
  _id,
  name,
  price,
  image,
  count,
  ingredientClickHandler,
  ...others
}) => {
  const [, dragRef] = useDrag({
    type: "burgerIngredient",
    item: { id: _id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const cardStyle = `${CardItemStyles.card} mb-8`;
  const currencyIconStyle = `${CardItemStyles.currencyIcon} ml-2`;

  return (
    <article
      className={cardStyle}
      onClick={() => ingredientClickHandler(_id)}
      ref={dragRef}
    >
      <span className="ml-3 mr-3">
        <Counter count={count} size="default" />
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
