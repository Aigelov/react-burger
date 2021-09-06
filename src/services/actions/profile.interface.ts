import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../action-types";
import { IUserSuccess } from "./auth.interface";

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly data: IUserSuccess;
}

export interface IGetUserFailure {
  readonly type: typeof GET_USER_FAILURE;
  readonly error: Error;
}

export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly data: IUserSuccess;
}

export interface IUpdateUserFailure {
  readonly type: typeof UPDATE_USER_FAILURE;
  readonly error: Error;
}

export type TProfileActions =
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailure
  | IUpdateUserRequest
  | IUpdateUserSuccess
  | IUpdateUserFailure;
