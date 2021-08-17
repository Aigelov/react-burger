import React from "react";
import CardListStyles from "./card-list.module.css";
import { Card } from "../card/card";

const orders = [
  {
    orderNumber: "034535",
    date: "Сегодня, 16:20 i-GMT+3",
    title: "Death Star Starship Main бургер",
    price: 480,
    ingredients: [
      "60d3b41abdacab0026a733c6",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
    ],
  },
  {
    orderNumber: "034534",
    date: "Сегодня, 13:20 i-GMT+3",
    title: "Interstellar бургер",
    price: 860,
    ingredients: [
      "60d3b41abdacab0026a733c6",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733ca",
      "60d3b41abdacab0026a733cb",
    ],
  },
  {
    orderNumber: "034533",
    date: "Сегодня, 13:20 i-GMT+3",
    title: "Плоды Фалленианского дерева",
    price: 860,
    ingredients: [
      "60d3b41abdacab0026a733c6",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733ca",
      "60d3b41abdacab0026a733cb",
      "60d3b41abdacab0026a733d0",
      "60d3b41abdacab0026a733d1",
      "60d3b41abdacab0026a733d2",
    ],
  },
  {
    orderNumber: "034532",
    date: "Сегодня, 13:20 i-GMT+3",
    title: "Плоды Фалленианского дерева",
    price: 860,
    ingredients: [
      "60d3b41abdacab0026a733c6",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733ca",
      "60d3b41abdacab0026a733cb",
      "60d3b41abdacab0026a733d0",
      "60d3b41abdacab0026a733d1",
      "60d3b41abdacab0026a733d2",
    ],
  },
  {
    orderNumber: "034531",
    date: "Сегодня, 13:20 i-GMT+3",
    title: "Плоды Фалленианского дерева",
    price: 860,
    ingredients: [
      "60d3b41abdacab0026a733c6",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733ca",
      "60d3b41abdacab0026a733cb",
      "60d3b41abdacab0026a733d0",
      "60d3b41abdacab0026a733d1",
      "60d3b41abdacab0026a733d2",
    ],
  },
];

export const CardList = ({ cardClickHandler }) => {
  return (
    <div className={CardListStyles.cardsWrapper}>
      {orders.map((order) => (
        <Card
          key={order.orderNumber}
          order={order}
          cardClickHandler={cardClickHandler}
        />
      ))}
    </div>
  );
};
