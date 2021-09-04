import {
  profileReducer,
  profileReducerInitialState as initialState,
} from "./profile";
import { TProfileActions } from "../actions";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../action-types";

const USER_SUCCESS_MOCK = {
  success: true,
  user: {
    email: "work@yandex.com",
    name: "Yandex",
  },
};

const ERROR_MOCK: Error = {
  name: "ERROR MOCK",
  message: "Something went wrong",
};

describe("profile reducer", () => {
  it("should return initial state", () => {
    expect(profileReducer(initialState, {} as TProfileActions)).toEqual(
      initialState
    );
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      profileReducer(initialState, {
        type: GET_USER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      profileReducer(initialState, {
        type: GET_USER_SUCCESS,
        data: USER_SUCCESS_MOCK,
      })
    ).toEqual({
      ...initialState,
      user: USER_SUCCESS_MOCK.user,
      loading: false,
      error: null,
    });
  });

  it("should handle GET_USER_FAILURE", () => {
    expect(
      profileReducer(initialState, {
        type: GET_USER_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: ERROR_MOCK,
    });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      profileReducer(initialState, {
        type: UPDATE_USER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      profileReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        data: USER_SUCCESS_MOCK,
      })
    ).toEqual({
      ...initialState,
      user: USER_SUCCESS_MOCK.user,
      loading: false,
      error: null,
    });
  });

  it("should handle UPDATE_USER_FAILURE", () => {
    expect(
      profileReducer(initialState, {
        type: UPDATE_USER_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: ERROR_MOCK,
    });
  });
});
