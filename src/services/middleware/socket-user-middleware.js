export const socketUserMiddleware = (wsUserUrl, wsUserActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsUserInit,
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
