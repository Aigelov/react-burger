import React from "react";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import MainStyles from "./main.module.css";

export const Main = ({ ingredients }) => {
  const mainStyle = `${MainStyles.main} col-9`;

  return (
    <main className={mainStyle}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
};
