import React from "react";
import PropTypes from "prop-types";
import { IngredientDetailsItem } from "../ingredient-details-item/ingredient-details-item";
import IngredientStyles from "./ingredient-details.module.css";

export const IngredientDetails = ({
  _id,
  name,
  image_large,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => {
  const helpfulnessStyle = `${IngredientStyles.helpfulness} mt-8`;
  const titleStyle = `${IngredientStyles.title} text text_type_main-medium`;

  const details = [
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
      <span className={titleStyle}>{name}</span>
      <span className={helpfulnessStyle}>
        {details.map((detail) => (
          <IngredientDetailsItem key={detail.title} {...detail} />
        ))}
      </span>
    </div>
  );
};

IngredientDetails.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};
