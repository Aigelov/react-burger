import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../action-types";
import { IUser } from "../actions";

type TProfileReducerInitialState = {
  error: Error | null;
  loading: boolean;
  user: IUser | null;
};

const initialState: TProfileReducerInitialState = {
  error: null,
  loading: false,
  user: null,
};

/**
 * TODO: Когда последний action типизирую на всех диспатчах появляется ошибка следующего рода
 * Не смог победить проблему
 * action: TProfileActions
 *
 * TS2345: Argument of type '(dispatch: AppDispatch) => Promise<void>' is not assignable to parameter of type
 * 'TProfileActions | TBurgerActions | TAuthActions | TOrderActions | TWsActions | TWsUserActions'.
 * Type '(dispatch: Dispatch<TProfileActions | TBurgerActions | TAuthActions | TOrderActions | TWsActions
 * | TWsUserActions>) => Promise<...>' is missing the following properties from type
 * 'IWsUserSendMessage': type, payload
 */
export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.data.user,
        loading: false,
        error: null,
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.data.user,
        loading: false,
        error: null,
      };
    }
    case UPDATE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
