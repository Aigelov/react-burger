import { useEffect } from "react";
import { authActions } from "../actions";
import { getCookie } from "../helpers-cookie";
import { useDispatch, useSelector } from "./hooks";

export const useCheckPreviousLogin = () => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(({ auth }) => auth);

  useEffect(() => {
    const accessToken = getCookie("token") ?? "";
    const refreshToken = localStorage.getItem("refreshToken");

    if (!isAuthorized && refreshToken) {
      dispatch(authActions.setAuthorization({ accessToken, refreshToken }));
    }
  }, [dispatch, isAuthorized]);
};
