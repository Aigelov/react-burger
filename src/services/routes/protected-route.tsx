import React, { FC, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { authActions } from "../actions";
import { useDispatch, useSelector } from "../hooks";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(({ auth }) => auth);
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (!isAuthorized && refreshToken) {
      dispatch(authActions.updateToken(refreshToken));
    }
  }, [dispatch, isAuthorized, refreshToken]);

  if (!isAuthorized && refreshToken) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
