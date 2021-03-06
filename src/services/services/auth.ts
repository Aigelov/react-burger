import { deleteCookie, setCookie } from "../helpers-cookie";
import {
  ILoginForm,
  IRegisterForm,
  IResetPasswordData,
  ITokens,
} from "../actions";

const login = async (form: ILoginForm) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/login",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  );

  const data = await response.json();

  if (data.success) {
    removeTokens();
    setTokens(data);
  } else {
    throw new Error(data.message);
  }

  return data;
};

const logout = async (token: string) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/logout",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ token }),
    }
  );

  const data = await response.json();

  if (data.success) {
    removeTokens();
  } else {
    throw new Error(data.message);
  }
};

const updateToken = async (token: string) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/token",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ token }),
    }
  );

  const data = await response.json();

  if (data.success) {
    removeTokens();
    setTokens(data);
  } else {
    throw new Error(data.message);
  }

  return data;
};

const register = async (form: IRegisterForm) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/register",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  );

  const data = await response.json();

  if (data.success) {
    removeTokens();
    setTokens(data);
  } else {
    throw new Error(data.message);
  }

  return data;
};

const forgotPassword = async (email: string) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/password-reset",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email,
      }),
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }
};

const resetPassword = async (form: IResetPasswordData) => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/password-reset/reset",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }
};

const setTokens = ({ accessToken, refreshToken }: ITokens) => {
  setCookie("token", accessToken.split("Bearer ")[1]);
  localStorage.setItem("refreshToken", refreshToken);
};

const removeTokens = () => {
  deleteCookie("token");
  localStorage.removeItem("refreshToken");
};

export const authService = {
  login,
  logout,
  updateToken,
  register,
  forgotPassword,
  resetPassword,
  removeTokens,
};
