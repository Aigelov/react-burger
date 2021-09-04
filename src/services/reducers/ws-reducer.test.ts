import { TWsActions } from "../actions";
import { wsReducer, wsReducerInitialState as initialState } from "./ws-reducer";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
} from "../action-types";
import { ORDER_MOCK } from "./order.test";

const ORDER_STATUS_LIST_MOCK = {
  total: 2475,
  totalToday: 8500,
  orders: [ORDER_MOCK],
  timestamp: 20000000,
};

describe("websocket reducer", () => {
  it("should return initial state", () => {
    expect(wsReducer(initialState, {} as TWsActions)).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_SUCCESS", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("should handle WS_CONNECTION_ERROR", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_ERROR,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should handle WS_GET_ORDER", () => {
    expect(
      wsReducer(initialState, {
        type: WS_GET_ORDER,
        payload: ORDER_STATUS_LIST_MOCK,
      })
    ).toEqual({
      ...initialState,
      orders: initialState.orders.length
        ? [
            ...initialState.orders,
            {
              ...ORDER_STATUS_LIST_MOCK,
              timestamp: new Date().getTime() / 1000,
            },
          ]
        : [
            {
              ...ORDER_STATUS_LIST_MOCK,
              timestamp: new Date().getTime() / 1000,
            },
          ],
    });
  });
});
