import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./services/reducers";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
  WS_SEND_ORDER,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
  WS_USER_SEND_ORDER,
} from "./services/action-types";
import { socketMiddleware, socketUserMiddleware } from "./services/middleware";

const wsUrl = "wss://norma.nomoreparties.space/orders/all";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendOrder: WS_SEND_ORDER,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrder: WS_GET_ORDER,
};

const wsUserUrl = "wss://norma.nomoreparties.space/orders";

const wsUserActions = {
  wsUserInit: WS_USER_CONNECTION_START,
  wsUserSendOrder: WS_USER_SEND_ORDER,
  userOnOpen: WS_USER_CONNECTION_SUCCESS,
  userOnClose: WS_USER_CONNECTION_CLOSED,
  userOnError: WS_USER_CONNECTION_ERROR,
  userOnOrder: WS_USER_GET_ORDER,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(socketMiddleware(wsUrl, wsActions)),
  applyMiddleware(socketUserMiddleware(wsUserUrl, wsUserActions))
);

export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, enhancer);
