import React from "react";
import PropTypes from "prop-types";
import { BurgerIngredientsCardItem } from "../burger-ingredients-card-item/burger-ingredients-card-item";
import CardStyles from "./burger-ingredients-card.module.css";
import { BurgerIngredientPropTypes } from "../../prop-types";

export const BurgerIngredientsCard = ({
  title,
  ingredients,
  tabRef,
  ingredientClickHandler,
}) => {
  return (
    <div ref={tabRef}>
      <p className="text text_type_main-medium mb-6">{title}</p>

      <div className={CardStyles.card}>
        {ingredients.map((item) => (
          <BurgerIngredientsCardItem
            key={item._id}
            ingredientClickHandler={ingredientClickHandler}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

BurgerIngredientsCard.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape(BurgerIngredientPropTypes)),
  tabRef: PropTypes.object.isRequired,
  ingredientClickHandler: PropTypes.func.isRequired,
};
