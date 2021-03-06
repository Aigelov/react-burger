import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AppHeader } from "../../components/app-header/app-header";
import { ProtectedRoute } from "./protected-route";
import { Main } from "../../components/main/main";
import {
  BurgerProviderPage,
  Feed,
  Feeds,
  ForgotPasswordPage,
  Ingredient,
  LoginPage,
  NoMatch,
  ProfileOrder,
  ProfileOrders,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from "../../pages";

interface IRoutesLocation {
  background: {
    key: string;
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
  };
}

export const Routes = () => {
  const location = useLocation<IRoutesLocation>();
  const background = location.state && location.state.background;

  return (
    <>
      <AppHeader />
      <Main>
        <Switch location={background || location}>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
          <Route path="/ingredients/:ingredientId">
            <Ingredient />
          </Route>
          <Route path="/feed/:orderId">
            <Feed />
          </Route>
          <Route path="/feed" exact={true}>
            <Feeds />
          </Route>
          <Route path="/" exact={true}>
            <BurgerProviderPage />
          </Route>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders/:orderId">
            <ProfileOrder />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <ProfileOrders />
          </ProtectedRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </>
  );
};
