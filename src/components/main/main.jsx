import React from "react";
import PropTypes from "prop-types";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredientPropTypes } from "../../prop-types";
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

Main.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(BurgerIngredientPropTypes))
    .isRequired,
};
