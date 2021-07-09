import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BurgerIngredientsCardItem } from "../burger-ingredients-card-item/burger-ingredients-card-item";
import CardStyles from "./burger-ingredients-card.module.css";
import { BurgerContext } from "../services/BurgerContext";

export const BurgerIngredientsCard = ({
  title,
  tabRef,
  ingredientClickHandler,
}) => {
  const { ingredients } = useContext(BurgerContext);

  return (
    <div ref={tabRef}>
      <p className="text text_type_main-medium mb-6">{title}</p>

      <span className={CardStyles.card}>
        {ingredients.map((item) => (
          <BurgerIngredientsCardItem
            key={item._id}
            ingredientClickHandler={ingredientClickHandler}
            {...item}
          />
        ))}
      </span>
    </div>
  );
};

BurgerIngredientsCard.propTypes = {
  title: PropTypes.string.isRequired,
  tabRef: PropTypes.object.isRequired,
  ingredientClickHandler: PropTypes.func.isRequired,
};
