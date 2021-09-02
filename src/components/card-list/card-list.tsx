import React, { FC } from "react";
import CardListStyles from "./card-list.module.css";
import { Card } from "../card/card";
import { ICardList } from "../../services/models/card.model";
import { IOrder } from "../../services/actions";

export const CardList: FC<ICardList> = ({
  cardClickHandler,
  ingredients,
  ...props
}) => {
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
      {orders.map((order: IOrder) => (
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
