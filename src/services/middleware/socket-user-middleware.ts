import { ISocketWsUserActions } from "../actions";
import { Middleware } from "redux";
import { RootState } from "../../index";

export const socketUserMiddleware = (
  wsUserUrl: string,
  wsUserActions: ISocketWsUserActions
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsUserInit,
        wsUserClose,
        wsUserSendOrder,
        userOnOpen,
        userOnClose,
        userOnError,
        userOnOrder,
      } = wsUserActions;
      const { accessToken } = getState().auth;

      if (type === wsUserInit && accessToken) {
        socket = new WebSocket(`${wsUserUrl}?token=${accessToken}`);
      }

      if (socket) {
        if (type === wsUserClose) {
          socket.close(1000, "Close user websocket without error.");
        }

        socket.onopen = (event) => {
          dispatch({ type: userOnOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: userOnError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: userOnOrder, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: userOnClose, payload: event });
        };

        if (type === wsUserSendOrder) {
          const order = { ...payload, token: accessToken };

          socket.send(JSON.stringify(order));
        }
      }

      next(action);
    };
  };
};
