import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth";
import { getCookie } from "../helpers-cookie";

export const useCheckPreviousLogin = () => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.auth);

  useEffect(() => {
    const accessToken = getCookie("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!isAuthorized && refreshToken) {
      dispatch(authActions.setAuthorization({ accessToken, refreshToken }));
    }
  }, [dispatch, isAuthorized]);
};
