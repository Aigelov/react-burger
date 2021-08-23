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

  return (
    <article
      className={CardItemStyles.card}
      onClick={() => ingredientClickHandler(_id)}
      ref={dragRef}
      title={name}
    >
      <div className="ml-3 mr-3">
        <Counter count={count} size="default" />
        <img src={image} alt={name} width="100%" />
        <div className={CardItemStyles.priceCurrency}>
          <span className="text text_type_main-medium">{price}</span>
          <div className={CardItemStyles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <span>{name}</span>
      </div>
    </article>
  );
};

BurgerIngredientsCardItem.propTypes = {
  ...BurgerIngredientPropTypes,
  ingredientClickHandler: PropTypes.func.isRequired,
};
