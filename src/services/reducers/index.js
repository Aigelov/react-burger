import { combineReducers } from "redux";
import { orderSliceReducer } from "../slices/order";
import { profileReducer } from "./profile";
import { burgerReducer } from "./burger";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  auth: authReducer,
  profile: profileReducer,
  orderSliceReducer,
});
