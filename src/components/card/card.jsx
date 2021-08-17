import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import CardStyles from "./card.module.css";
import { FeedCard } from "../feed-card/feed-card";

export const Card = ({ order, cardClickHandler }) => {
  return (
    <div className={CardStyles.cards} onClick={() => cardClickHandler(order)}>
      <div className={CardStyles.card}>
        <div className={CardStyles.cardHeader}>
          <div className="text text_type_digits-default">
            #{order.orderNumber}
          </div>
          <div className="text text_type_main-default text_color_inactive">
            {order.date}
          </div>
        </div>
        <div className="mb-6" />
        <div className="text text_type_main-medium">{order.title}</div>
        <div className="mb-6" />
        <div className={CardStyles.cardInfo}>
          <div className={CardStyles.cardIngredients}>
            {order.ingredients.map((ingredient, index) => (
              <FeedCard
                key={ingredient}
                ingredient={ingredient}
                ingredientsCount={order.ingredients.length}
                index={index}
              />
            ))}
          </div>
          <div className={CardStyles.price}>
            <div className="text text_type_digits-default mr-2">
              {order.price}
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
