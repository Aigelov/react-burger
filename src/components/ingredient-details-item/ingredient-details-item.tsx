import React, { FC } from "react";
import IngredientDetailsItemStyles from "./ingredient-details-item.module.css";
import { IIngredientDetailInfo } from "../../services/models";

export const IngredientDetailsItem: FC<IIngredientDetailInfo> = ({
  title,
  info,
}) => {
  return (
    <div className={IngredientDetailsItemStyles.ingredientDetailsItem}>
      <span className="text text_type_main-default">{title}</span>
      <span className="text text_type_digits-default">{info}</span>
    </div>
  );
};
