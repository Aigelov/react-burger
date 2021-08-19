import { authActions } from "./auth";
import { checkoutOrderFetch } from "../services/order";

export const CHECKOUT_ORDER_REQUEST = "CHECKOUT_ORDER_REQUEST";
export const CHECKOUT_ORDER_SUCCESS = "CHECKOUT_ORDER_SUCCESS";
export const CHECKOUT_ORDER_FAILURE = "CHECKOUT_ORDER_FAILURE";

export const checkoutOrder = (ingredientIDs) => {
  const request = () => ({ type: CHECKOUT_ORDER_REQUEST });
  const success = (data) => ({ type: CHECKOUT_ORDER_SUCCESS, data });
  const failure = (error) => ({ type: CHECKOUT_ORDER_FAILURE, error });

  return async (dispatch) => {
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
