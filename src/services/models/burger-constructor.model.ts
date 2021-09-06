import { IBurgerIngredient } from "./burger-ingredient.model";

export type TFindIngredient = (uniqueID: string) => {
  ingredient: IBurgerIngredient;
  index: number;
};

export type TMoveIngredient = (
  uniqueID: string,
  atIndex: number | null
) => void;

export interface IBurgerConstructorDragObject {
  uniqueID: string;
  originalIndex: number | null;
}
