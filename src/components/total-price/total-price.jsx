import React, { useContext } from "react";
import { BurgerContext } from "../services/BurgerContext";

export const TotalPrice = () => {
  const { ingredients } = useContext(BurgerContext);

  const totalPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0
  );

  return <span className="text text_type_digits-medium">{totalPrice}</span>;
};
