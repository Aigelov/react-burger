import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";
import { Profile } from "../profile/profile";
import { Menu } from "../menu/menu";

export const AppHeader = () => {
  const headerWrapperStyle = `${headerStyles.wrapper} pt-4 pb-4`;
  const headerStyle = `${headerStyles.header} col-9`;

  return (
    <header className={headerWrapperStyle}>
      <div className={headerStyle}>
        <Menu />
        <span className={headerStyles.logo}>
          <Logo />
        </span>
        <Profile />
      </div>
    </header>
  );
};
