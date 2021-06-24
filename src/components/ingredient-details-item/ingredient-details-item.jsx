import React from "react";
import IngredientDetailsItemStyles from "./ingredient-details-item.module.css";

export const IngredientDetailsItem = ({ title, info }) => {
  return (
    <span className={IngredientDetailsItemStyles.ingredientDetailsItem}>
      <span className="text text_type_main-default">{title}</span>
      <span className="text text_type_digits-default">{info}</span>
    </span>
  );
};
