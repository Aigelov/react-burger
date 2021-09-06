import { profileService } from "../services/profile";
import { authActions } from "./auth";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../action-types";
import { AppDispatch } from "../../index";
import {
  IGetUserFailure,
  IGetUserRequest,
  IGetUserSuccess,
  IUpdateUserFailure,
  IUpdateUserRequest,
  IUpdateUserSuccess,
} from "./profile.interface";
import { IRegisterForm, IUserSuccess } from "./auth.interface";

const getUser = () => {
  const request = (): IGetUserRequest => ({ type: GET_USER_REQUEST });
  const success = (data: IUserSuccess): IGetUserSuccess => ({
    type: GET_USER_SUCCESS,
    data,
  });
  const failure = (error: Error): IGetUserFailure => ({
    type: GET_USER_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data = await profileService.getUser();
      dispatch(success(data));
    } catch (err) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (err.message === "jwt expired" && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
        getUser();

        return;
      }

      dispatch(failure(err));
    }
  };
};

const updateUser = (form: IRegisterForm) => {
  const request = (): IUpdateUserRequest => ({ type: UPDATE_USER_REQUEST });
  const success = (data: IUserSuccess): IUpdateUserSuccess => ({
    type: UPDATE_USER_SUCCESS,
    data,
  });
  const failure = (error: Error): IUpdateUserFailure => ({
    type: UPDATE_USER_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data = await profileService.updateUser(form);
      dispatch(success(data));
    } catch (err) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (err.message === "jwt expired" && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
        updateUser(form);

        return;
      }

      dispatch(failure(err));
    }
  };
};

export const profileActions = {
  getUser,
  updateUser,
};
