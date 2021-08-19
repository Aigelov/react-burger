import React from "react";
import CardListStyles from "./card-list.module.css";
import { Card } from "../card/card";

export const CardList = ({ cardClickHandler, ingredients, ...props }) => {
  const { orders } = props;

  if (!orders) {
    return null;
  }

  if (!orders.length) {
    return (
      <div className={CardListStyles.cardsWrapper}>
        <p>У вас еще нет заказов.</p>
        <p>Сделайте ваш первый заказ :)</p>
      </div>
    );
  }

  return (
    <div className={CardListStyles.cardsWrapper}>
      {orders.map((order) => (
        <Card
          key={order.number}
          order={order}
          ingredients={ingredients}
          cardClickHandler={cardClickHandler}
        />
      ))}
    </div>
  );
};
