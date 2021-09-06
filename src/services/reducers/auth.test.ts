import { authReducer, authReducerInitialState as initialState } from "./auth";
import { TAuthActions } from "../actions";
import {
  CLEAR_AUTHORIZATION,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SET_AUTHORIZATION,
  SET_EMAIL_RESET,
  UPDATE_TOKEN_FAILURE,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
} from "../action-types";

const LOGIN_SUCCESS_DATA_MOCK = {
  accessToken: "Bearer accessToken",
  refreshToken: "refreshToken",
  success: true,
  user: {
    email: "work@yandex.com",
    name: "Yandex",
  },
};

const ERROR_MOCK: Error = {
  name: "Error",
  message: "Something went wrong",
};

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(initialState, {} as TAuthActions)).toEqual(initialState);
  });

  it("should handle SET_AUTHORIZATION", () => {
    const accessToken = "accessToken";
    const refreshToken = "refreshToken";

    expect(
      authReducer(initialState, {
        type: SET_AUTHORIZATION,
        accessToken,
        refreshToken,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: true,
      accessToken,
      refreshToken,
    });
  });

  it("should handle CLEAR_AUTHORIZATION", () => {
    expect(
      authReducer(initialState, {
        type: CLEAR_AUTHORIZATION,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: false,
      accessToken: null,
      refreshToken: null,
    });
  });

  it("should handle SET_EMAIL_RESET", () => {
    const emailReset = true;

    expect(
      authReducer(initialState, {
        type: SET_EMAIL_RESET,
        emailReset,
      })
    ).toEqual({
      ...initialState,
      emailReset,
    });
  });

  it("should handle SET_EMAIL_RESET", () => {
    const emailReset = true;

    expect(
      authReducer(initialState, {
        type: SET_EMAIL_RESET,
        emailReset,
      })
    ).toEqual({
      ...initialState,
      emailReset,
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_REQUEST,
      })
    ).toEqual({
      ...initialState,
      error: null,
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        data: LOGIN_SUCCESS_DATA_MOCK,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: true,
      accessToken: LOGIN_SUCCESS_DATA_MOCK.accessToken.split("Bearer ")[1],
      refreshToken: LOGIN_SUCCESS_DATA_MOCK.refreshToken,
      user: LOGIN_SUCCESS_DATA_MOCK.user,
    });
  });

  it("should handle LOGIN_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      error: ERROR_MOCK.toString(),
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_REQUEST,
      })
    ).toEqual({
      ...initialState,
      error: null,
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      user: null,
      isAuthorized: false,
      accessToken: null,
      refreshToken: null,
    });
  });

  it("should handle LOGOUT_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      error: ERROR_MOCK.toString(),
    });
  });

  it("should handle UPDATE_TOKEN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_REQUEST,
      })
    ).toEqual({
      ...initialState,
      error: null,
    });
  });

  it("should handle UPDATE_TOKEN_SUCCESS", () => {
    const data = {
      accessToken: "Bearer accessToken",
      refreshToken: "refreshToken",
      success: true,
    };

    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_SUCCESS,
        data,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: true,
      accessToken: data.accessToken.split("Bearer ")[1],
      refreshToken: data.refreshToken,
      error: null,
    });
  });

  it("should handle UPDATE_TOKEN_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: false,
      accessToken: null,
      refreshToken: null,
      error: ERROR_MOCK.toString(),
    });
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      error: null,
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
        data: LOGIN_SUCCESS_DATA_MOCK,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: true,
      accessToken: LOGIN_SUCCESS_DATA_MOCK.accessToken.split("Bearer ")[1],
      refreshToken: LOGIN_SUCCESS_DATA_MOCK.refreshToken,
      user: LOGIN_SUCCESS_DATA_MOCK.user,
    });
  });

  it("should handle REGISTER_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      isAuthorized: false,
      error: ERROR_MOCK.toString(),
    });
  });

  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      emailReset: true,
    });
  });

  it("should handle FORGOT_PASSWORD_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });

  it("should handle RESET_PASSWORD_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it("should handle RESET_PASSWORD_FAILURE", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });
});
