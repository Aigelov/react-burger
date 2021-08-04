import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useAlert } from "react-alert";
import { addIngredient, increaseCount } from "../../services/actions/burger";
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor";

export const BurgerProviderPage = () => {
  const dispatch = useDispatch();

  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const { selectedIngredients } = useSelector((store) => store.burger);

  const alert = useAlert();

  const handleDrop = (draggedItem) => {
    const ingredient = ingredients
      .filter((item) => item._id === draggedItem.id)
      .reduce((acc, curr) => curr, {});

    if (!selectedIngredients.length && ingredient.type !== "bun") {
      alert.show("Сначала надо выбрать булку");
      return false;
    }

    dispatch(addIngredient(ingredient));
    dispatch(increaseCount(ingredient));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor onDropHandler={handleDrop} />
    </DndProvider>
  );
};
