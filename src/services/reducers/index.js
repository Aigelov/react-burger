import { combineReducers } from "redux";
import { orderSliceReducer } from "../slices/order";
import { profileReducer } from "./profile";
import { burgerReducer } from "./burger";
import { authReducer } from "./auth";
import { wsReducer } from "./ws-reducer";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  auth: authReducer,
  profile: profileReducer,
  orderSliceReducer,
  wsReducer,
});
