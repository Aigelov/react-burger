import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
  WS_USER_SEND_ORDER,
} from "../action-types";

export const wsUserConnectionSuccess = () => {
  return {
    type: WS_USER_CONNECTION_SUCCESS,
  };
};

export const wsUserConnectionError = () => {
  return {
    type: WS_USER_CONNECTION_ERROR,
  };
};

export const wsUserConnectionClosed = () => {
  return {
    type: WS_USER_CONNECTION_CLOSED,
  };
};

export const wsUserGetMessage = (order) => {
  return {
    type: WS_USER_GET_ORDER,
    payload: order,
  };
};

export const wsUserSendMessage = (order) => {
  return {
    type: WS_USER_SEND_ORDER,
    payload: order,
  };
};
