import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
  WS_SEND_ORDER,
} from "../action-types";
import { IOrder, IWsOrder } from "./order.interface";

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
  readonly type: typeof WS_GET_ORDER;
  readonly payload: IOrder;
}

export interface IWsSendMessage {
  readonly type: typeof WS_SEND_ORDER;
  readonly payload: IWsOrder;
}

export type TWsActions =
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessage
  | IWsSendMessage;

export interface IWsActions {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly wsSendOrder: typeof WS_SEND_ORDER;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onOrder: typeof WS_GET_ORDER;
}
