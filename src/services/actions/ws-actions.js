import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
  WS_SEND_ORDER,
} from "../action-types";

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (order) => {
  return {
    type: WS_GET_ORDER,
    payload: order,
  };
};

export const wsSendMessage = (order) => {
  return {
    type: WS_SEND_ORDER,
    payload: order,
  };
};
