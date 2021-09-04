import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
  WS_SEND_ORDER,
} from "../action-types";
import {
  IWsConnectionClosed,
  IWsConnectionError,
  IWsConnectionSuccess,
  IWsGetMessage,
  IWsSendMessage,
} from "./ws-actions.interface";
import { IWsOrder } from "./order.interface";
import { IOrderStatusList } from "../../components/order-status-list/order-status-list";

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): IWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (
  orderStatusList: IOrderStatusList
): IWsGetMessage => {
  return {
    type: WS_GET_ORDER,
    payload: orderStatusList,
  };
};

export const wsSendMessage = (order: IWsOrder): IWsSendMessage => {
  return {
    type: WS_SEND_ORDER,
    payload: order,
  };
};
