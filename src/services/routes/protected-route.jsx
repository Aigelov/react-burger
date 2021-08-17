import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authActions } from "../actions";

export const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.auth);
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
