import React, { FC } from "react";
import { BurgerIngredientsCardItem } from "../burger-ingredients-card-item/burger-ingredients-card-item";
import CardStyles from "./burger-ingredients-card.module.css";
import { IBurgerIngredientsCard } from "../../services/models";

export const BurgerIngredientsCard: FC<IBurgerIngredientsCard> = ({
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
            ingredient={item}
          />
        ))}
      </div>
    </div>
  );
};
