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

export interface ISetAuthorization {
  readonly type: typeof SET_AUTHORIZATION;
  readonly accessToken: string;
  readonly refreshToken: string;
}

export interface IClearAuthorization {
  readonly type: typeof CLEAR_AUTHORIZATION;
}

export interface ISetEmailReset {
  readonly type: typeof SET_EMAIL_RESET;
  emailReset: boolean;
}

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly data: ILoginSuccessData;
}

export interface ILoginFailure {
  readonly type: typeof LOGIN_FAILURE;
  readonly error: Error;
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailure {
  readonly type: typeof LOGOUT_FAILURE;
  readonly error: Error;
}

export interface IUpdateTokenRequest {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IUpdateTokenSuccess {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly data: IUpdateTokenSuccessData;
}

export interface IUpdateTokenFailure {
  readonly type: typeof UPDATE_TOKEN_FAILURE;
  readonly error: Error;
}

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  readonly data: IRegisterSuccessData;
}

export interface IRegisterFailure {
  readonly type: typeof REGISTER_FAILURE;
  readonly error: Error;
}

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailure {
  readonly type: typeof FORGOT_PASSWORD_FAILURE;
  readonly error: Error;
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailure {
  readonly type: typeof RESET_PASSWORD_FAILURE;
  readonly error: Error;
}

export type TAuthActions =
  | ISetAuthorization
  | IClearAuthorization
  | ISetEmailReset
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailure
  | IUpdateTokenRequest
  | IUpdateTokenSuccess
  | IUpdateTokenFailure
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailure
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailure
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailure;

export interface ITokens {
  readonly accessToken: string;
  readonly refreshToken: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface ILoginSuccessData {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly success: boolean;
  readonly user: IUser;
}

export interface IRegisterSuccessData extends ILoginSuccessData {}

export interface IUser {
  email: string;
  name: string;
}

export interface IUserSuccess {
  success: boolean;
  user: IUser;
}

export interface IUpdateTokenSuccessData {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly success: boolean;
}

export interface IResetPasswordData {
  password: string;
  code: string;
}
