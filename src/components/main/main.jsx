import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useAlert } from "react-alert";
import { addIngredient, increaseCount } from "../../services/actions/burger";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import MainStyles from "./main.module.css";

export const Main = () => {
  const dispatch = useDispatch();

  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const { selectedIngredients } = useSelector((store) => store.burger);

  const alert = useAlert();

  const mainStyle = `${MainStyles.main} col-9`;

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
    <main className={mainStyle}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor onDropHandler={handleDrop} />
      </DndProvider>
    </main>
  );
};
