import React from "react";
import { useSelector } from "../../services/hooks";
import { IBurgerIngredient } from "../../services/models";

export const TotalPrice = () => {
  const ingredients: IBurgerIngredient[] = useSelector(
    ({ burger }) => burger.selectedIngredients
  );

  // Стоимость рассчитывается как сумма всех ингредиентов добавленных в конструктор.
  // В стоимость должны быть включены две булки - верх и низ.
  const totalPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0
  );

  return <span className="text text_type_digits-medium">{totalPrice}</span>;
};
