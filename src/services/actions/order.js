import { findAllOrders } from "../services/order";
import { authActions } from "./auth";

export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAILURE = "GET_ORDERS_FAILURE";

export const getOrders = () => {
  const request = () => ({ type: GET_ORDERS_REQUEST });
  const success = (data) => ({ type: GET_ORDERS_SUCCESS, data });
  const failure = (error) => ({ type: GET_ORDERS_FAILURE, error });

  return async (dispatch) => {
    dispatch(request());

    try {
      const { data } = await findAllOrders();
      dispatch(success(data));
    } catch (err) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (err.message === "jwt expired" && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
        getOrders();

        return;
      }

      dispatch(failure(err));
    }
  };
};
