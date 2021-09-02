import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
  WS_USER_SEND_ORDER,
} from "../action-types";
import { IOrder } from "./order.interface";

export interface IWsUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
}

export interface IWsUserConnectionError {
  readonly type: typeof WS_USER_CONNECTION_ERROR;
}

export interface IWsUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
}

export interface IWsUserGetMessage {
  readonly type: typeof WS_USER_GET_ORDER;
  readonly payload: IOrder;
}

export interface IWsUserSendMessage {
  readonly type: typeof WS_USER_SEND_ORDER;
  readonly payload: IOrder;
}

export type TWsUserActions =
  | IWsUserConnectionSuccess
  | IWsUserConnectionError
  | IWsUserConnectionClosed
  | IWsUserGetMessage
  | IWsUserSendMessage;

export interface IWsUserActions {
  readonly wsUserInit: typeof WS_USER_CONNECTION_START;
  readonly wsUserSendOrder: typeof WS_USER_SEND_ORDER;
  readonly userOnOpen: typeof WS_USER_CONNECTION_SUCCESS;
  readonly userOnClose: typeof WS_USER_CONNECTION_CLOSED;
  readonly userOnError: typeof WS_USER_CONNECTION_ERROR;
  readonly userOnOrder: typeof WS_USER_GET_ORDER;
}
