import { ISocketWsActions } from "../actions";
import { Middleware } from "redux";
import { RootState } from "../../index";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: ISocketWsActions
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsClose,
        wsSendOrder,
        onOpen,
        onClose,
        onError,
        onOrder,
      } = wsActions;
      const { accessToken } = getState().auth;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}`);
      }

      if (socket) {
        if (type === wsClose) {
          socket.close(1000, "Close websocket without error.");
        }

        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onOrder, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendOrder) {
          const order = { ...payload, token: accessToken };

          socket.send(JSON.stringify(order));
        }
      }

      next(action);
    };
  };
};
