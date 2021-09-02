import { authActions } from "./auth";
import { checkoutOrderFetch } from "../services/order";
import {
  CHECKOUT_ORDER_FAILURE,
  CHECKOUT_ORDER_REQUEST,
  CHECKOUT_ORDER_SUCCESS,
} from "../action-types";
import { AppDispatch } from "../../index";
import {
  ICheckoutOrderFailure,
  ICheckoutOrderRequest,
  ICheckoutOrderSuccess,
  ISuccessOrder,
} from "./order.interface";

export const checkoutOrder = (ingredientIDs: string[]) => {
  const request = (): ICheckoutOrderRequest => ({
    type: CHECKOUT_ORDER_REQUEST,
  });
  const success = (data: ISuccessOrder): ICheckoutOrderSuccess => ({
    type: CHECKOUT_ORDER_SUCCESS,
    data,
  });
  const failure = (error: Error): ICheckoutOrderFailure => ({
    type: CHECKOUT_ORDER_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const data = await checkoutOrderFetch(ingredientIDs);
      dispatch(success(data));
    } catch (err) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (err.message === "jwt expired" && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
        checkoutOrder(ingredientIDs);

        return;
      }

      dispatch(failure(err));
    }
  };
};
