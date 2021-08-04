import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProfileOrders } from "../../pages/profile-orders/profile-orders";
import { AppHeader } from "../../components/app-header/app-header";
import { Ingredient } from "../../pages/ingredient/ingredient";
import { NoMatch } from "../../pages/no-match/no-match";
import { ProtectedRoute } from "./protected-route";
import { Main } from "../../components/main/main";
import {
  BurgerProviderPage,
  ForgotPasswordPage,
  LoginPage,
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
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <ProfileOrders />
          </ProtectedRoute>
          <ProtectedRoute path={`/ingredients/:ingredientId`}>
            <Ingredient />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true}>
            <BurgerProviderPage />
          </ProtectedRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </>
  );
};
