import React, { FC } from "react";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import CardItemStyles from "./burger-ingredients-card-item.module.css";
import { IBurgerIngredientsCardItem } from "../../services/models";

export const BurgerIngredientsCardItem: FC<IBurgerIngredientsCardItem> = ({
  ingredient,
  ingredientClickHandler,
}) => {
  const { _id, name, price, image, count } = ingredient;
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
        {count && <Counter count={count} size="default" />}
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
