import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";
import { ProfileHeader } from "../profile-header/profile-header";
import { Menu } from "../menu/menu";

export const AppHeader = () => {
  const headerStyle = `${headerStyles.header} col-9`;

  return (
    <header className={headerStyles.wrapper}>
      <div className={headerStyle}>
        <Menu />
        <Link to="/" className={headerStyles.logo}>
          <Logo />
        </Link>
        <ProfileHeader />
      </div>
    </header>
  );
};
