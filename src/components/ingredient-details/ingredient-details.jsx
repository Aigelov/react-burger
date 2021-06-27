import React from "react";
import PropTypes from "prop-types";
import { IngredientDetailsItem } from "../ingredient-details-item/ingredient-details-item";
import IngredientStyles from "./ingredient-details.module.css";
import { Modal } from "../modal/modal";

export const IngredientDetails = ({ onClose, ...ingredient }) => {
  const helpfulnessStyle = `${IngredientStyles.helpfulness} mt-8`;
  const titleStyle = `${IngredientStyles.title} text text_type_main-medium`;

  const details = [
    {
      title: "Калории,ккал",
      info: ingredient.calories,
    },
    {
      title: "Белки, г",
      info: ingredient.proteins,
    },
    {
      title: "Жиры, г",
      info: ingredient.fat,
    },
    {
      title: "Углеводы, г",
      info: ingredient.carbohydrates,
    },
  ];

  return (
    <Modal header="Детали ингредиента" onClose={onClose}>
      <div className={IngredientStyles.ingredientDetails}>
        <img src={ingredient.image_large} alt="Ingredient" />
        <span className={titleStyle}>{ingredient.name}</span>
        <span className={helpfulnessStyle}>
          {details.map((detail) => (
            <IngredientDetailsItem key={detail.title} {...detail} />
          ))}
        </span>
      </div>
    </Modal>
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
