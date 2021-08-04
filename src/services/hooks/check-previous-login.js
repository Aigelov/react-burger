import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "../helpers-cookie";
import { authActions } from "../actions/auth";

export const useCheckPreviousLogin = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.auth);

  useEffect(() => {
    const accessToken = getCookie("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!isAuthenticated && accessToken) {
      dispatch(
        authActions.setAuthenticated({
          accessToken,
          refreshToken,
        })
      );
    }
  }, [dispatch, isAuthenticated]);
};
