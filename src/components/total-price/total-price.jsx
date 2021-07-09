import React, { useContext } from "react";
import { BurgerContext } from "../services/BurgerContext";

export const TotalPrice = () => {
  const { selectedIngredients: ingredients } = useContext(BurgerContext);

  // Стоимость рассчитывается как сумма всех ингредиентов добавленных в конструктор.
  // В стоимость должны быть включены две булки - верх и низ.
  const totalPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0
  );

  return <span className="text text_type_digits-medium">{totalPrice}</span>;
};
