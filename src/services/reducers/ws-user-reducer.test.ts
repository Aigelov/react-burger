import { TWsUserActions } from "../actions";
import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
} from "../action-types";
import { ORDER_MOCK } from "./order.test";
import {
  wsUserReducer,
  wsUserReducerInitialState as initialState,
} from "./ws-user-reducer";

describe("websocket user reducer", () => {
  it("should return initial state", () => {
    expect(wsUserReducer(initialState, {} as TWsUserActions)).toEqual(
      initialState
    );
  });

  it("should handle WS_USER_CONNECTION_SUCCESS", () => {
    expect(
      wsUserReducer(initialState, {
        type: WS_USER_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsUserConnected: true,
    });
  });

  it("should handle WS_USER_CONNECTION_ERROR", () => {
    expect(
      wsUserReducer(initialState, {
        type: WS_USER_CONNECTION_ERROR,
      })
    ).toEqual({
      ...initialState,
      wsUserConnected: false,
    });
  });

  it("should handle WS_USER_CONNECTION_CLOSED", () => {
    expect(
      wsUserReducer(initialState, {
        type: WS_USER_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsUserConnected: false,
    });
  });

  it("should handle WS_USER_GET_ORDER", () => {
    expect(
      wsUserReducer(initialState, {
        type: WS_USER_GET_ORDER,
        payload: ORDER_MOCK,
      })
    ).toEqual({
      ...initialState,
      userOrders: initialState.userOrders.length
        ? [
            ...initialState.userOrders,
            {
              ...ORDER_MOCK,
              timestamp: new Date().getTime() / 1000,
            },
          ]
        : [
            {
              ...ORDER_MOCK,
              timestamp: new Date().getTime() / 1000,
            },
          ],
    });
  });
});
