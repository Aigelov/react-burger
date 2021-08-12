import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import IngredientStyles from "./ingredient.module.css";

export const Ingredient = () => {
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const { ingredients } = useSelector((store) => store.burger);

  useEffect(() => {
    const foundIngredient = ingredients.find(
      (item) => item._id === ingredientId
    );

    setIngredient(foundIngredient);
  }, [ingredients, ingredientId]);

  return (
    <div className={IngredientStyles.ingredient}>
      {ingredient && <IngredientDetails {...ingredient} />}
    </div>
  );
};
