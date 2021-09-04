import {
  orderReducer,
  orderReducerInitialState as initialState,
} from "./order";
import { TOrderActions } from "../actions";
import {
  CHECKOUT_ORDER_FAILURE,
  CHECKOUT_ORDER_REQUEST,
  CHECKOUT_ORDER_SUCCESS,
} from "../action-types";

export const ORDER_MOCK = {
  _id: "ORDER_ID",
  ingredients: ["1", "2", "3"],
  name: "Краторная булка",
  number: 2475,
  status: "done",
  createdAt: "2021-09-04 12:30:00",
  updatedAt: "2021-09-04 12:30:00",
};

export const ORDER_USER_MOCK = {
  owner: {
    email: "work@yandex.com",
    name: "Yandex",
    createdAt: "2021-01-01 12:30:00",
    updatedAt: "2021-01-01 12:30:00",
  },
  price: 1350,
};

const SUCCESS_ORDER_MOCK = {
  name: "Order",
  order: {
    ...ORDER_MOCK,
    ...ORDER_USER_MOCK,
  },
  success: true,
};

const ERROR_MOCK: Error = {
  name: "Error",
  message: "Something went wrong",
};

describe("order reducer", () => {
  it("should return initial state", () => {
    expect(orderReducer(initialState, {} as TOrderActions)).toEqual(
      initialState
    );
  });

  it("should handle CHECKOUT_ORDER_REQUEST", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle CHECKOUT_ORDER_SUCCESS", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_ORDER_SUCCESS,
        data: SUCCESS_ORDER_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: null,
      order: SUCCESS_ORDER_MOCK.order,
    });
  });

  it("should handle CHECKOUT_ORDER_FAILURE", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_ORDER_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: ERROR_MOCK,
    });
  });
});
