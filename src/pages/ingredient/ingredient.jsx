import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { ingredientsActions } from "../../services/slices/ingredients";
import IngredientStyles from "./ingredient.module.css";

export const Ingredient = () => {
  const dispatch = useDispatch();
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const { ingredients } = useSelector((store) => store.ingredientsReducer);

  useEffect(() => {
    dispatch(ingredientsActions.findAll());
  }, [dispatch]);

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
