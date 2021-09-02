import {
  CHECKOUT_ORDER_FAILURE,
  CHECKOUT_ORDER_REQUEST,
  CHECKOUT_ORDER_SUCCESS,
} from "../action-types";
import { IUser } from "./auth.interface";

export interface ICheckoutOrderRequest {
  readonly type: typeof CHECKOUT_ORDER_REQUEST;
}

export interface ICheckoutOrderSuccess {
  readonly type: typeof CHECKOUT_ORDER_SUCCESS;
  readonly data: ISuccessOrder;
}

export interface ICheckoutOrderFailure {
  readonly type: typeof CHECKOUT_ORDER_FAILURE;
  readonly error: Error;
}

export type TOrderActions =
  | ICheckoutOrderRequest
  | ICheckoutOrderSuccess
  | ICheckoutOrderFailure;

export interface IOrder {
  _id: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserOrder {
  _id: string;
  ingredients: string[];
  name: string;
  number: number;
  owner: IUser & { createdAt: string; updatedAt: string };
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISuccessOrder {
  name: string;
  order: IUserOrder;
  success: boolean;
}

export interface IWsOrder {
  ingredientIDs: string[];
  name: string;
  orderNumber: number;
}

export interface IReadyOrder {
  _id: string;
  number: number;
}

export interface IPendingOrder extends IReadyOrder {}
