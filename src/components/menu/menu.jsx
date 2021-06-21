import React from "react";
import MenuStyles from "./menu.module.css";
import { routes } from "./routes";
import { HeaderItem } from "../header-item/header-item";

export const Menu = () => {
  return (
    <nav>
      <ul className={MenuStyles.menu}>
        {routes.map((item) => (
          <HeaderItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
