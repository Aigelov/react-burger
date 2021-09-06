import React, { ReactElement } from "react";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface IRoutes {
  id: number;
  svgIcon: ReactElement;
  text: string;
  padding: string;
  path: string;
}

export const routes: IRoutes[] = [
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
