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

export const Routes = () => {
  const location = useLocation();
  const modal = location.state && location.state.modal;

  return (
    <>
      <AppHeader />
      <Main>
        <Switch location={modal || location}>
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
          <Route path={`/ingredients/:ingredientId`}>
            <Ingredient />
          </Route>
          <Route path="/profile/orders" exact={true}>
            <ProfileOrders />
          </Route>
          <Route path="/" exact={true}>
            <BurgerProviderPage />
          </Route>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders/:orderId" exact={true}>
            <ProfileOrder />
          </ProtectedRoute>
          <ProtectedRoute path="/feeds" exact={true}>
            <Feeds />
          </ProtectedRoute>
          <ProtectedRoute path="/feed/:feedId" exact={true}>
            <Feed />
          </ProtectedRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </>
  );
};
