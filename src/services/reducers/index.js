import { combineReducers } from "redux";
import { ingredientsReducer } from "../slices/ingredients";
import { orderSliceReducer } from "../slices/order";
import { burgerReducer } from "./burger";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  orderSliceReducer,
  ingredientsReducer,
});
