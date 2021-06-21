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
    active: "active",
    padding: "p-5",
  },
  {
    id: 2,
    svgIcon: <ListIcon type="secondary" />,
    text: "Лента заказов",
    active: null,
    padding: "p-5",
  },
];
