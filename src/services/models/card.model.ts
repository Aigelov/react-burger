import { IOrder } from "../actions";
import { IBurgerIngredient } from "./burger-ingredient.model";
import { IOrderStatusList } from "../../components/order-status-list/order-status-list";

export interface ICard {
  order: IOrder;
  ingredients: IBurgerIngredient[];
  cardClickHandler: (order: IOrder) => void;
}

export interface ICardList extends IOrderStatusList {
  ingredients: IBurgerIngredient[];
  cardClickHandler: (order: IOrder) => void;
}
