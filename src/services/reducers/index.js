import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { burgerReducer } from "./burger";
import { authReducer } from "./auth";
import { wsReducer } from "./ws-reducer";
import { wsUserReducer } from "./ws-user-reducer";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  auth: authReducer,
  profile: profileReducer,
  orderReducer,
  wsReducer,
  wsUserReducer,
});
