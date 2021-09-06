import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import IngredientStyles from "./ingredient.module.css";
import { useSelector } from "../../services/hooks";
import { IBurgerIngredient } from "../../services/models";

interface IngredientParams {
  ingredientId: string;
}

export const Ingredient = () => {
  const { ingredientId } = useParams<IngredientParams>();
  const [ingredient, setIngredient] = useState<IBurgerIngredient | null>(null);
  const ingredients: IBurgerIngredient[] = useSelector(
    ({ burger }) => burger.ingredients
  );

  useEffect(() => {
    if (ingredients.length) {
      const foundIngredient =
        ingredients.find((item) => item._id === ingredientId) || null;

      setIngredient(foundIngredient);
    }
  }, [ingredients, ingredientId]);

  return (
    <div className={IngredientStyles.ingredient}>
      {ingredient && <IngredientDetails {...ingredient} />}
    </div>
  );
};
