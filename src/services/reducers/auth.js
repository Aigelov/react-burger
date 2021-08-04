import {
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
  SET_AUTHENTICATED,
  UPDATE_TOKEN_FAILURE,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
} from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.tokens.accessToken,
        refreshToken: action.tokens.refreshToken,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        user: action.user,
        error: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
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
        isAuthenticated: false,
        user: null,
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
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        error: null,
      };
    }
    case UPDATE_TOKEN_FAILURE: {
      return {
        ...state,
        error: action.error.toString(),
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        user: action.user,
        error: null,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
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
