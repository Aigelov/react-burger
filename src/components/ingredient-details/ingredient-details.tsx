import React, { FC } from "react";
import { IngredientDetailsItem } from "../ingredient-details-item/ingredient-details-item";
import IngredientStyles from "./ingredient-details.module.css";
import {
  IBurgerIngredient,
  IIngredientDetailInfo,
} from "../../services/models";

export const IngredientDetails: FC<IBurgerIngredient> = ({
  _id,
  name,
  image_large,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => {
  const details: IIngredientDetailInfo[] = [
    {
      title: "Калории,ккал",
      info: calories,
    },
    {
      title: "Белки, г",
      info: proteins,
    },
    {
      title: "Жиры, г",
      info: fat,
    },
    {
      title: "Углеводы, г",
      info: carbohydrates,
    },
  ];

  return (
    <div className={IngredientStyles.ingredientDetails}>
      <img src={image_large} alt="Ingredient" />
      <span className="text text_type_main-medium" style={{ display: "block" }}>
        {name}
      </span>
      <div className={IngredientStyles.helpfulness}>
        {details.map((detail) => (
          <IngredientDetailsItem key={detail.title} {...detail} />
        ))}
      </div>
    </div>
  );
};
