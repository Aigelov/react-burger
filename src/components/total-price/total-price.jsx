import React from "react";
import { useSelector } from "react-redux";

export const TotalPrice = () => {
  const { selectedIngredients: ingredients } = useSelector(
    (store) => store.burger
  );

  // Стоимость рассчитывается как сумма всех ингредиентов добавленных в конструктор.
  // В стоимость должны быть включены две булки - верх и низ.
  const totalPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0
  );

  return <span className="text text_type_digits-medium">{totalPrice}</span>;
};
