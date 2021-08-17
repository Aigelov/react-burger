import React from "react";
import { format } from "date-fns";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FeedCard } from "../feed-card/feed-card";
import CardStyles from "./card.module.css";

export const Card = ({ order, ingredients, cardClickHandler }) => {
  const totalPrice = ingredients
    .filter((item) => order.ingredients.includes(item._id))
    .reduce((total, cur) => total + cur.price, 0);

  return (
    <div className={CardStyles.cards} onClick={() => cardClickHandler(order)}>
      <div className={CardStyles.card}>
        <div className={CardStyles.cardHeader}>
          <div className="text text_type_digits-default">#{order.number}</div>
          <div className="text text_type_main-default text_color_inactive">
            {format(new Date(order.createdAt), "dd.MM.yyyy HH:mm:ss")}
          </div>
        </div>
        <div className="mb-6" />
        <div className="text text_type_main-medium">{order.name}</div>
        <div className="mb-6" />
        <div className={CardStyles.cardInfo}>
          <div className={CardStyles.cardIngredients}>
            {order.ingredients.map((ingredient, index) => (
              <FeedCard
                key={index}
                ingredient={ingredient}
                ingredientsCount={order.ingredients.length}
                index={index}
              />
            ))}
          </div>
          <div className={CardStyles.price}>
            <div className="text text_type_digits-default mr-2">
              {totalPrice}
            </div>
            <div className={CardStyles.currencyIcon}>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
