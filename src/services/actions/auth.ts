import { authService } from "../services/auth";
import { setCookie } from "../helpers-cookie";
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
import { AppDispatch } from "../../index";
import {
  IClearAuthorization,
  IForgotPasswordFailure,
  IForgotPasswordRequest,
  IForgotPasswordSuccess,
  ILoginFailure,
  ILoginForm,
  ILoginRequest,
  ILoginSuccess,
  ILoginSuccessData,
  ILogoutFailure,
  ILogoutRequest,
  ILogoutSuccess,
  IRegisterFailure,
  IRegisterForm,
  IRegisterRequest,
  IRegisterSuccess,
  IRegisterSuccessData,
  IResetPasswordData,
  IResetPasswordFailure,
  IResetPasswordRequest,
  IResetPasswordSuccess,
  ISetAuthorization,
  ISetEmailReset,
  ITokens,
  IUpdateTokenFailure,
  IUpdateTokenRequest,
  IUpdateTokenSuccess,
  IUpdateTokenSuccessData,
} from "./auth.interface";

const setAuthorization = ({ accessToken, refreshToken }: ITokens) => {
  return (dispatch: AppDispatch) => {
    authService.removeTokens();

    setCookie("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    const setAuthorizationType: ISetAuthorization = {
      type: SET_AUTHORIZATION,
      accessToken,
      refreshToken,
    };

    dispatch(setAuthorizationType);
  };
};

const clearAuthorization = () => {
  return (dispatch: AppDispatch) => {
    authService.removeTokens();

    const clearAuthorizationType: IClearAuthorization = {
      type: CLEAR_AUTHORIZATION,
    };

    dispatch(clearAuthorizationType);
  };
};

const setEmailReset = (emailReset: boolean) => {
  return (dispatch: AppDispatch) => {
    const setEmailResetType: ISetEmailReset = {
      type: SET_EMAIL_RESET,
      emailReset,
    };

    dispatch(setEmailResetType);
  };
};

const login = (form: ILoginForm) => {
  const request = (): ILoginRequest => ({ type: LOGIN_REQUEST });
  const success = (data: ILoginSuccessData): ILoginSuccess => ({
    type: LOGIN_SUCCESS,
    data,
  });
  const failure = (error: Error): ILoginFailure => ({
    type: LOGIN_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data: ILoginSuccessData = await authService.login(form);
      dispatch(success(data));
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

const logout = (token: string) => {
  const request = (): ILogoutRequest => ({ type: LOGOUT_REQUEST });
  const success = (): ILogoutSuccess => ({ type: LOGOUT_SUCCESS });
  const failure = (error: Error): ILogoutFailure => ({
    type: LOGOUT_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      await authService.logout(token);
      dispatch(success());
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

const updateToken = (token: string) => {
  const request = (): IUpdateTokenRequest => ({ type: UPDATE_TOKEN_REQUEST });
  const success = (data: IUpdateTokenSuccessData): IUpdateTokenSuccess => ({
    type: UPDATE_TOKEN_SUCCESS,
    data,
  });
  const failure = (error: Error): IUpdateTokenFailure => ({
    type: UPDATE_TOKEN_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data: IUpdateTokenSuccessData = await authService.updateToken(
        token
      );
      dispatch(success(data));
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

const register = (form: IRegisterForm) => {
  const request = (): IRegisterRequest => ({ type: REGISTER_REQUEST });
  const success = (data: IRegisterSuccessData): IRegisterSuccess => ({
    type: REGISTER_SUCCESS,
    data,
  });
  const failure = (error: Error): IRegisterFailure => ({
    type: REGISTER_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data: IRegisterSuccessData = await authService.register(form);
      dispatch(success(data));
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

const forgotPassword = (email: string) => {
  const request = (): IForgotPasswordRequest => ({
    type: FORGOT_PASSWORD_REQUEST,
  });
  const success = (): IForgotPasswordSuccess => ({
    type: FORGOT_PASSWORD_SUCCESS,
  });
  const failure = (error: Error): IForgotPasswordFailure => ({
    type: FORGOT_PASSWORD_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      await authService.forgotPassword(email);
      dispatch(success());
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

const resetPassword = (form: IResetPasswordData) => {
  const request = (): IResetPasswordRequest => ({
    type: RESET_PASSWORD_REQUEST,
  });
  const success = (): IResetPasswordSuccess => ({
    type: RESET_PASSWORD_SUCCESS,
  });
  const failure = (error: Error): IResetPasswordFailure => ({
    type: RESET_PASSWORD_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      await authService.resetPassword(form);
      dispatch(success());
    } catch (err) {
      dispatch(failure(err));
    }
  };
};

export const authActions = {
  setAuthorization,
  clearAuthorization,
  setEmailReset,
  login,
  logout,
  updateToken,
  register,
  forgotPassword,
  resetPassword,
};
