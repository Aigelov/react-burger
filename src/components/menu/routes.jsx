import React from "react";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const routes = [
  {
    id: 1,
    svgIcon: <BurgerIcon type="primary" />,
    text: "Конструктор",
    padding: "p-5",
    path: "/",
  },
  {
    id: 2,
    svgIcon: <ListIcon type="secondary" />,
    text: "Лента заказов",
    padding: "p-5",
    path: "/feed",
  },
];
