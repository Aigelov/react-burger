import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { STATUS_TYPES } from "../constants/status-types";
import { FeedCard } from "../feed-card/feed-card";
import CardStyles from "./card.module.css";
import { ICard } from "../../services/models/card.model";
import { IBurgerIngredient } from "../../services/models";

export const Card: FC<ICard> = ({ order, ingredients, cardClickHandler }) => {
  const { location } = useHistory();
  const [showOrderStatus, setShowOrderStatus] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/profile/orders") {
      setShowOrderStatus(true);
    }
  }, [location.pathname]);

  const amountCount: Record<string, number> = order.ingredients.reduce(
    (acc: Record<string, number>, cur: string) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else {
        acc[cur] += 1;
      }

      return acc;
    },
    {}
  );

  const orderIngredients = ingredients
    .filter((item) => order.ingredients.includes(item._id))
    .map((item: IBurgerIngredient & { amount?: number }) => {
      item.amount = amountCount[item._id];

      return item;
    });

  const totalPrice = orderIngredients
    .filter((item) => order.ingredients.includes(item._id))
    .reduce((total, cur) => total + cur.price * (cur.amount || 1), 0);

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
        {showOrderStatus && (
          <>
            <div className="mb-2" />
            <div
              className="text text_type_digits-small"
              style={{ color: "#00CCCC" }}
            >
              {STATUS_TYPES[order.status]}
            </div>
          </>
        )}
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
