import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth";

const TEN_MINUTES = 10 * 60 * 1000;

export const useUpdateToken = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.auth);
  const timer = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      timer.current = setInterval(() => {
        const refreshToken = localStorage.getItem("refreshToken");

        dispatch(authActions.updateToken(refreshToken));
      }, TEN_MINUTES);
    }

    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, [dispatch, isAuthenticated]);
};
