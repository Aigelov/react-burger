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
import { IUser, TAuthActions } from "../actions";

type TAuthState = {
  loading: boolean;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthorized: boolean;
  emailReset: boolean;
  error: Error | null;
};

export const authReducerInitialState: TAuthState = {
  loading: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthorized: false,
  emailReset: false,
  error: null,
};

export const authReducer = (
  state = authReducerInitialState,
  action: TAuthActions
) => {
  switch (action.type) {
    case SET_AUTHORIZATION: {
      return {
        ...state,
        isAuthorized: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case CLEAR_AUTHORIZATION: {
      return {
        ...state,
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,
      };
    }
    case SET_EMAIL_RESET: {
      return {
        ...state,
        emailReset: action.emailReset,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
        user: action.data.user,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
        error: action.error.toString(),
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        error: action.error.toString(),
      };
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
        error: null,
      };
    }
    case UPDATE_TOKEN_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
        accessToken: null,
        refreshToken: null,
        error: action.error.toString(),
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.data.user,
        isAuthorized: true,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
        error: action.error.toString(),
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        emailReset: true,
      };
    }
    case FORGOT_PASSWORD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
